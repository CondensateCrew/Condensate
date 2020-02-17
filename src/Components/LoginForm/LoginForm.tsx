import React, { useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LoginForm.scss';

interface User {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ error, setError ] = useState<string>('');


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {

  }

  const validateCredentials = async () => {
    const regExp = new RegExp('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/') //eslint-disable-line
    let test = regExp.test(email)
    let response:string;
    test ? response = 'YippyKayYay!!' : response = 'Not a valid email address'
    return response
    // test ? const res = await apiCall GET : setError('Please enter a valid email address')
    // res.status === 404 ?  setError('No user found for this email address')
    // : !res.body.passwordMatch ? setError('Invalid password')
    // : dispatch user + brainstorms to store and redirect

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
        <button type='button'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;