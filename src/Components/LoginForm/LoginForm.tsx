import React, { useState, useEffect } from 'react';
import { validateCredentials } from '_utils';
import { getUser } from 'apiCalls/apiCalls';
import LoadingImage from 'Components/LoadingImage/LoadingImage';

interface Props {
  isLogin: boolean,
  toggleTab: (login: boolean) => void,
  setCookie: (name: string, value: any, options?: object) => void
};

const LoginForm: React.FC<Props> = ({ isLogin, toggleTab, setCookie}) => {
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ error, setError ] = useState<string>('');
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ disabled, setDisabled ] = useState<boolean>(true);

  const toggleForm = ():void => toggleTab(!isLogin);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setPassword(e.target.value);
  };

  const validateEmail = () => {
    return (!validateCredentials(email) && !isLoading)
      ? setError('Please enter valid email')
      : setError('');
  };

  const validateButton = ():void => {
    if (email.length > 0 && password.length > 0) {
      setDisabled(false);
    }
  }

  const handleSubmit = async () => {
    if (!validateCredentials(email)) {
      return setError('Please enter valid email')
    }
    await fetchUser();
  }

  const fetchUser = async () => {
    try {
      setDisabled(true);
      setIsLoading(true);
      const { token, first_name, last_name } = await getUser({ email, password });
      setCookie('token', token, { path: '/' });
      setCookie('name', `${first_name}-${last_name}`, { path: '/' });
    }
    catch(error) {
      setError(error.message);
      setDisabled(false);
    }
  };

  const alertRequired = (): void => {
    if (password === '' && !isLoading) {
      return setError('Please enter a password');
    }
  };

  useEffect(validateButton, [ email, password, error ]);

  return (
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
  );
}

export default LoginForm;
