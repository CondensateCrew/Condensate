import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Header.scss';
import back from 'assets/down.svg';

const Header: React.FC = () => {
  const [ isRedirected, setIsRedirected ] = useState<boolean>(false);
  const redirect = () => setIsRedirected(true);
  
  return (
    <header className="round-header">
      {isRedirected && <Redirect to="/dashboard" />}
      <button onClick={redirect}>
        <img src={back} alt="back"/>
        to dashboard
      </button>
      <h1>Condensate</h1>
    </header>
  )
}

export default Header;
