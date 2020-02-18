import React from 'react';
import './SignUpForm.scss';

interface Props {
  isLogin: boolean,
  toggleTab: (login: boolean) => void
}

const SignUpForm: React.FC<Props> = ({ isLogin, toggleTab }) => {
  const submitUser = (event: React.MouseEvent): void => {
    event.preventDefault();
  }

  const toggleForm = (): void => toggleTab(!isLogin);

  return (
    <div className="sign-up-form">
      <header>
        <h2 className="active">Sign Up</h2>
        <h2 className="hidden" onClick={toggleForm}>Login</h2>
      </header>
      <form>
        <label htmlFor="first-name">
          First Name*
          <input
            id="first-name"
            type="text"
            placeholder="Your First Name" />
        </label>
        <label htmlFor="last-name">
          last name*
          <input
            id="last-name"
            type="text"
            placeholder="Your Last Name" />
        </label>
        <label htmlFor="email">
          Email*
          <input
            id="email"
            type="text"
            placeholder="Your Email" />
        </label>
        <label htmlFor="password">
          Password*
          <input
            id="password"
            type="password"
            placeholder="Your Password" />
        </label>
        <label htmlFor="repeat-password">
          repeat Password*
          <input
            id="repeat-password"
            type="password"
            placeholder="Repeat Password" />
        </label>
        <button disabled={true} onClick={submitUser}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
