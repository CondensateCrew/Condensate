import React, { useState, } from 'react';
import { useDispatch } from 'react-redux';
import { validateCredentials } from '../../_utils';
import { UserLoginPosting } from '../../interfaces';
import './LoginForm.scss';

const LoginForm: React.FC = () => {
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ error, setError ] = useState<string>('');


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    validateCredentials(email) ? console.log('Valid Email') : console.log('Please enter valid email')
  }

  return (
    <div>
      <form>
        <label htmlFor='email'>Email</label>
        <input id='email' type='text' name='email' placeholder='name@email.com' value={email} 
        onChange={(e) => handleEmailChange(e)}></input>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' name='password' placeholder='********' value={password} 
        onChange={(e) => handlePasswordChange(e)}></input>
        <button type='button' onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;