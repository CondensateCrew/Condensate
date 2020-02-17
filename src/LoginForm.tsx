import React, { useState, } from 'react';
import './LoginForm.scss';

const LoginForm: React.FC = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <div>
      <h2>Hello</h2>
    </div>
  )
}

module.exports = LoginForm;