import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, addWordSamples, addAllActions, addAllCategories, addSecretSauce } from 'redux/actions';
import { UserSignupPosting, WordSample } from '../../interfaces';
import InputElement from '../../Components/InputElement/InputElement';
import { validateCredentials } from '../../_utils';
import { Redirect } from 'react-router-dom';
import { postUser, getSetUp, getDashboard } from 'apiCalls/apiCalls';

type checkedInputType = 'first-name' | 'last-name' | 'email' | 'password' | 'repeat-password';

interface Props {
  isLogin: boolean,
  toggleTab: (login: boolean) => void
}

const SignUpForm: React.FC<Props> = ({ isLogin, toggleTab }) => {
  const [ user, setUser ] = useState<UserSignupPosting>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const [ disabled, setDisabled ] = useState<boolean>(true);
  const [ repeatPassword, setPassword ] = useState<string>('');
  const [ error, setError ] = useState<string>('');
  const [ isLoaded, setIsLoaded ] = useState<boolean>(false);
  const dispatch = useDispatch();

  const validateButton = (): void => {
    if (user.email === '') return setDisabled(true);
    if (user.password === '') return setDisabled(true);
    if (user.firstName === '') return setDisabled(true);
    if (user.lastName === '') return setDisabled(true);
    if (user.password !== repeatPassword) return setDisabled(true);
    setError('')
    return setDisabled(false);
  }

  const validateInputs = (): void => {
    if (user.email === '') return setError('Please, add you email');
    if (user.password === '') return setError('Please, add you password');
    if (user.firstName === '') return setError('Please, add you first name');
    if (user.lastName === '') return setError('Please, add you last name');
    if (user.password !== repeatPassword) return setError('Passwords are not the same');
    if (!validateCredentials(user.email)) return setError('Please, enter a valid email');
    return setError('');
  }

  useEffect(validateButton, [ user, repeatPassword ]);

  const submitUser = async (event: React.MouseEvent) => {
    event.preventDefault();
    validateInputs();

    if (error === '') {
      const token = await postNewUser();
      await fetchGameStuff(token);

      return error === '' && setIsLoaded(true);
    }
  }

  const postNewUser = async () => {
    try {
      const userNew = {
        first_name: user.firstName,
        last_name: user.lastName,
        password: user.password,
        email: user.email,
      };

      const { token, first_name, last_name} = await postUser(userNew);

      const modifiedUser = {
        id: token,
        firstName: first_name,
        lastName: last_name
      }

      dispatch(addUser(modifiedUser));

      return token;
    }
    catch (error) {
      setError(error.message);
    }
  }

  const fetchGameStuff = async (token: string) => {
    try {
      const setUpRes = await getSetUp(token);
      dispatch(addWordSamples(setUpRes));
      const dashRes = await getDashboard(token);
      dispatch(addAllActions(dashRes.actions));
      dispatch(addAllCategories(dashRes.categories));
      const secretSauce = await setUpRes
        .map((word: WordSample): string => word.word);
      dispatch(addSecretSauce(secretSauce));
    }
    catch (error) {
      setError(error.message);
    }
  }

  const toggleForm = (): void => toggleTab(!isLogin);

  const inputs: checkedInputType[] = ['first-name', 'last-name', 'email', 'password', 'repeat-password']
  const inputsElements = inputs
    .map((input: checkedInputType) => (
      <InputElement
        key={input}
        typeInput={input}
        {... {
          user,
          repeatPassword,
          setPassword,
          setUser,
          setError
        }}
      />
    ));

  return (
    isLoaded
      ? <Redirect to='/dashboard' />
      : (
        <div className="sign-up-form">
          <header>
            <h2 className="active">Sign Up</h2>
            <h2 className="hidden" onClick={toggleForm}>Login</h2>
          </header>
          <form>
            {error !== '' && <p className="error-notification">{error}</p>}
            {inputsElements}
            <button disabled={disabled} onClick={submitUser}>Sign Up</button>
          </form>
        </div>
      )
  );
}

export default SignUpForm;
