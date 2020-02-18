import React, { useState } from 'react';
import './WelcomePage.scss';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../../Containers/SignUpForm/SignUpForm';
import LoginForm from '../../Components/LoginForm/LoginForm';

const WelcomePage: React.FC = () => {
  const [ isLogin, setIsLogin ] = useState<boolean>(false);

  return (
    <main className="welcome-page">
      <aside>
        <h1>Condensate</h1>
        <h2>a new way <br /> to brainstorm</h2>
      </aside>
      { !isLogin ? <SignUpForm isLogin={isLogin} toggleTab={setIsLogin} />
      : <LoginForm isLogin={isLogin} toggleTab={setIsLogin}/>}
    </main>
  );
}

export default WelcomePage;
