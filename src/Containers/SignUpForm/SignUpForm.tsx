import React, { useState, useEffect } from 'react';
import { UserSignupPosting } from '../../interfaces';
import InputElement from '../../Components/InputElement/InputElement';
import { validateCredentials } from '../../_utils';
import { postUser } from 'apiCalls/apiCalls';
import LoadingImage from 'Components/LoadingImage/LoadingImage';

type checkedInputType = 'first-name' | 'last-name' | 'email' | 'password' | 'repeat-password';

interface Props {
  isLogin: boolean,
  toggleTab: (login: boolean) => void,
  setCookie: (name: string, value: any, options?: object) => void
};

interface UserPosted {
  first_name: string,
  last_name: string,
  password: string,
  email: string,
}

const SignUpForm: React.FC<Props> = ({ isLogin, toggleTab, setCookie }) => {
  const [ user, setUser ] = useState<UserSignupPosting>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [ disabled, setDisabled ] = useState<boolean>(true);
  const [ repeatPassword, setPassword ] = useState<string>('');
  const [ error, setError ] = useState<string>('');
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const validateButton = (): void => {
    if (user.email === '') return setDisabled(true);
    if (user.password === '') return setDisabled(true);
    if (user.firstName === '') return setDisabled(true);
    if (user.lastName === '') return setDisabled(true);
    if (user.password !== repeatPassword) return setDisabled(true);
    setError('');
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
  };

  useEffect(validateButton, [ user, repeatPassword ]);

  const submitUser = async (event: React.MouseEvent) => {
    event.preventDefault();
    validateInputs();

    if (error === '') await postNewUser();
  }

  const postNewUser = async () => {
    try {
      const { firstName, lastName, password, email } = user;
      setDisabled(true);
      setIsLoading(true);
      const userNew: UserPosted = {
        first_name: firstName,
        last_name: lastName,
        password: password,
        email: email,
      };
      const { token, first_name, last_name} = await postUser(userNew);
      setCookie('token', token, { path: '/' });
      setCookie('name', `${first_name}-${last_name}`, { path: '/' });
    }
    catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }

  const toggleForm = (): void => toggleTab(!isLogin);

  const inputs: checkedInputType[] = ['first-name', 'last-name', 'email', 'password', 'repeat-password'];
  const inputsElements: JSX.Element[] = inputs.map((input: checkedInputType) => (
    <InputElement
      key={input} typeInput={input}
      {... { isLoading, user, repeatPassword, setPassword, setUser, setError }}
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
        <button disabled={disabled} onClick={submitUser}>
        {
          isLoading
            ? <LoadingImage />
            : 'Sign Up'
        }
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
