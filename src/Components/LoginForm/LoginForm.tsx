import React, { useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LoginForm.scss';

const LoginForm: React.FC = () => {
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ error, setError ] = useState<string>('');

  const validateCredentials = (credentials: object) => {
    const regExp = new RegExp('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
    let test = regExp.test(credentials.email)
    // when login button is clicked take values from state and validate in backend
    // if credentials match, dispatch user name to store and all brainstorms
    // else if they do not match setError indicating bad email or bad password
  }
  return (
    <div>
      <form>
        <label htmlFor='email'>Email</label>
        <input id='email' type='text' name='email' placeholder='name@email.com' value={email} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}></input>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' name='password' placeholder='********' value={password} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}></input>
        <button type='button'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;