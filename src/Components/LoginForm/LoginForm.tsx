import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { validateCredentials } from '../../_utils';
import { UserLoginPosting } from '../../interfaces';
import { addUser } from '../../redux/actions';

interface Props {
  isLogin: boolean,
  toggleTab: (login: boolean) => void
}

const LoginForm: React.FC<Props> = ({ isLogin, toggleTab}) => {
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ error, setError ] = useState<string>('');
  const [ disabled, setDisabled ] = useState<boolean>(true);

  const toggleForm = ():void => toggleTab(!isLogin);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setPassword(e.target.value)
  }
  
  const validateEmail = () => {
    if (!validateCredentials(email)) {
      setError('Please enter valid email')
    }
  }
  
  const validateButton = ():void => {
    if (email.length > 0 && password.length > 0) {
      setDisabled(false)
    }
  }
  
  const handleSubmit = () => {
    if (!validateCredentials(email)) {
      setError('Please enter valid email')
    }
  }
  
  useEffect(validateButton, [ email, password ]);

  return (
    <div>
      <header>
        <h2 className='hidden' onClick={toggleForm}>Sign Up</h2>
        <h2 className='active'>Log In</h2>
      </header>
      <form>
        {error !== '' && <p className="error-notification">{error}</p>}
        <label htmlFor='email'>Email</label>
        <input id='email' type='text' name='email' placeholder='name@email.com' value={email} 
        onChange={(e) => handleEmailChange(e)} onBlur={validateEmail}></input>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' name='password' placeholder='********' value={password} 
        onChange={(e) => handlePasswordChange(e)}></input>
        <button type='button' disabled={disabled} onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;