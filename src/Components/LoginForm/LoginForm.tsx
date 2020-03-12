import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { validateCredentials } from '_utils';
import { getUser, getSetUp, getDashboard } from 'apiCalls/apiCalls';
import { addUser, addWordSamples, addSecretSauce, addAllActions, addAllCategories, addAllBrainstorms } from 'redux/actions';
import { Redirect } from 'react-router-dom';
import { WordSample } from 'interfaces';
import LoadingImage from 'Components/LoadingImage/LoadingImage';

interface Props {
  isLogin: boolean,
  toggleTab: (login: boolean) => void
}

const LoginForm: React.FC<Props> = ({ isLogin, toggleTab}) => {
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ error, setError ] = useState<string>('');
  const [ isLoaded, setIsLoaded ] = useState<boolean>(false);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ disabled, setDisabled ] = useState<boolean>(true);
  const dispatch = useDispatch();


  const toggleForm = ():void => toggleTab(!isLogin);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setPassword(e.target.value)
  }

  const validateEmail = () => {
    if (!validateCredentials(email) && !isLoading) {
      return setError('Please enter valid email')
    }
    setError('')
  }

  const validateButton = ():void => {
    if (email.length > 0 && password.length > 0) {
      setDisabled(false)
    }
  }

  const handleSubmit = async () => {
    if (!validateCredentials(email)) {
      return setError('Please enter valid email')
    }

    const token = await fetchUser();
    await fetchGameStuff(token);

    if(error === '') setIsLoaded(true);
  }

  const fetchUser = async () => {
    try {
      setDisabled(true);
      setIsLoading(true);
      const user = await getUser({ email, password });
      const modifiedUser = {
        id: user.token,
        firstName: user.first_name,
        lastName: user.last_name
      }
      dispatch(addUser(modifiedUser));
      return user.token
    }
    catch(error) {
      setError(error.message);
      setDisabled(false);
    }
  }

  const fetchGameStuff = async (token: string) => {
    try {
      const setUpRes = await getSetUp(token);
      dispatch(addWordSamples(setUpRes));
      const dashRes = await getDashboard(token);
      dispatch(addAllActions(dashRes.actions));
      dispatch(addAllCategories(dashRes.categories));
      dispatch(addAllBrainstorms(dashRes.brainstorms))
      const secretSauce = await setUpRes
        .map((word: WordSample): string => word.word);
      dispatch(addSecretSauce(secretSauce));
      setIsLoading(false);
    }
    catch(error) {
      setError(error.message);
      setDisabled(false);
    }
  }

  const alertRequired = () => {
    if (password === '' && !isLoading) {
      return setError('Please enter a password')
    }
  }

  useEffect(validateButton, [ email, password, error ]);

  return (
    isLoaded
      ? <Redirect to='/dashboard' />
      : (
        <div>
          <header>
            <h2 className='active'>Login</h2>
            <h2 className='hidden' onClick={toggleForm}>Sign Up</h2>
          </header>
          <form>
            {error !== '' && <p className="error-notification">{error}</p>}
            <label htmlFor='email'>Email
              <input id='email' type='text' name='email' placeholder='name@email.com' value={email}
              onChange={handleEmailChange} onBlur={validateEmail} autoComplete='off' readOnly={isLoading} required />
            </label>
            <label htmlFor='password'>Password
              <input id='password' type='password' name='password' placeholder='********' value={password}
              onChange={handlePasswordChange} onBlur={alertRequired} readOnly={isLoading} required />
            </label>
            <button type='button' disabled={disabled} onClick={handleSubmit}>
              {
                isLoading
                  ? <LoadingImage />
                  : 'Login'
              }
              </button>
          </form>
        </div>
      )
  )
}

export default LoginForm;
