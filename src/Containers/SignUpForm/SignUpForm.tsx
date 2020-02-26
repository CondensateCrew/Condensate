import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, addWordSamples, addAllActions, addAllCategories } from 'redux/actions';
import { UserSignupPosting } from '../../interfaces';
import InputElement from '../../Components/InputElement/InputElement';
import { validateCredentials } from '../../_utils';
import { useHistory } from 'react-router-dom';
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
  const dispatch = useDispatch();
  let history = useHistory();

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

    if (error !== '') {
      console.log(user);
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        password: user.password
      })
    }

    const newUser = await postUser(options)
    const modifiedUser = {
      id: newUser.token,
      firstName: newUser.first_name,
      lastName: newUser.last_name
    }
    const setUpDashOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: modifiedUser.id
    }
    const setUpRes = await getSetUp(setUpDashOptions);
    const dashRes = await getDashboard(setUpDashOptions);

    dispatch(addUser(modifiedUser));
    dispatch(addWordSamples(setUpRes));
    dispatch(addAllActions(dashRes.actions));
    dispatch(addAllCategories(dashRes.categories));
    history.push('/dashboard')
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
    <div className="sign-up-form">
      <header>
        <h2 className="hidden" onClick={toggleForm}>Login</h2>
        <h2 className="active">Sign Up</h2>
      </header>
      <form>
        {error !== '' && <p className="error-notification">{error}</p>}
        {inputsElements}
        <button disabled={disabled} onClick={submitUser}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
