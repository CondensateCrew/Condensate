import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { validateCredentials } from '../../_utils';
import { UserLoginPosting } from '../../interfaces';
import { addUser } from '../../redux/actions';
import { useHistory } from 'react-router-dom';

interface Props {
  isLogin: boolean,
  toggleTab: (login: boolean) => void
}

const LoginForm: React.FC<Props> = ({ isLogin, toggleTab}) => {
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ error, setError ] = useState<string>('');
  const [ disabled, setDisabled ] = useState<boolean>(true);
  let history = useHistory();

  const toggleForm = ():void => toggleTab(!isLogin);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setPassword(e.target.value)
  }
  
  const validateEmail = () => {
    if (!validateCredentials(email)) {
      return setError('Please enter valid email')
    }
    setError('')
  }
  
  const validateButton = ():void => {
    if (email.length > 0 && password.length > 0) {
      setDisabled(false)
    }
  }
  
  const handleSubmit = () => {
    if (!validateCredentials(email)) {
      return setError('Please enter valid email')
    }
    history.push('/dashboard')
  }

  const alertRequired = () => {
    if (password === '') {
      return setError('Please enter a password')
    }
  }
  
  useEffect(validateButton, [ email, password, error ]);

  return (
    <div>
      <header>
        <h2 className='active'>Login</h2>
        <h2 className='hidden' onClick={toggleForm}>Sign Up</h2>
      </header>
      <form>
        {error !== '' && <p className="error-notification">{error}</p>}
        <label htmlFor='email'>Email</label>
        <input id='email' type='text' name='email' placeholder='name@email.com' value={email} 
        onChange={handleEmailChange} onBlur={validateEmail} autoComplete='off' required></input>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' name='password' placeholder='********' value={password} 
        onChange={handlePasswordChange} onBlur={alertRequired} required></input>
        <button type='button' disabled={disabled} onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;