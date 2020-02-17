import React, { useState, } from 'react';
import './LoginForm.scss';

const LoginForm: React.FC = () => {
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  return (
    <div>
      <form>
        <label htmlFor='email'>Email</label>
        <input id='email' type='text' placeholder='name@email.com' value={email} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}></input>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' placeholder='********' value={password} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}></input>
        <button type='button'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;