import React, { useState, useEffect } from 'react';
import { UserSignupPosting } from '../../interfaces'
import InputElement from '../../Components/InputElement/InputElement'

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
    if (user.email === '') return setError('Please, add you email!');
    if (user.password === '') return setError('Please, add you password!');
    if (user.firstName === '') return setError('Please, add you first name!');
    if (user.lastName === '') return setError('Please, add you last name!');
    if (user.password !== repeatPassword) return setError('Passwords are not the same!');
    return setError('');
  }

  useEffect(validateButton, [ user, repeatPassword ]);

  const submitUser = (event: React.MouseEvent): void => {
    event.preventDefault();
    validateInputs();
    if (error !== '') {
      console.log(user);
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
  );
}

export default SignUpForm;
