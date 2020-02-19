import React, { useState, } from 'react';
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

  const handleSubmit = () => {
    if (!validateCredentials(email)) {
      setError('Please enter valid email')
    }
  }

  return (
    <div>
      <header>
        <h2 className='hidden' onClick={toggleForm}>Sign Up</h2>
        <h2 className='active'>Log In</h2>
      </header>
      <form>
        <label htmlFor='email'>Email</label>
        <input id='email' type='text' name='email' placeholder='name@email.com' value={email} 
        onChange={(e) => handleEmailChange(e)} onBlur={validateEmail}></input>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' name='password' placeholder='********' value={password} 
        onChange={(e) => handlePasswordChange(e)}></input>
        <button type='button' onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;