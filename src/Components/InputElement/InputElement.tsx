import React, { useState, useEffect } from 'react';
import { UserSignupPosting } from '../../interfaces';

type checkedInputType = 'first-name' | 'last-name' | 'email' | 'password' | 'repeat-password';

interface Props {
  isLoading: boolean,
  typeInput: checkedInputType,
  user: UserSignupPosting,
  setPassword: (repeatPassword: string) => void
  setUser: (user: UserSignupPosting) => void
  setError: (error: string) => void
}

enum checkType {
  'first-name' = 'firstName',
  'last-name' = 'lastName'
}

enum placeholderText {
  'first-name' = 'Your First Name',
  'last-name' = 'Your Last Name',
  'email' = 'email@mail.com',
  'password' = 'Your Password',
  'repeat-password' = 'Repeat Password',
}

const InputElement: React.FC<Props> = (props) => {
  const { typeInput, user, setPassword, setUser, setError, isLoading } = props;

  const [ textValue, setTextValue ] = useState<string>('');

  const changeUserInfo = (): void => {
    setError('');
    if (typeInput === 'repeat-password') {
      setPassword(textValue);
    }
    else if (typeInput === 'first-name' || typeInput === 'last-name') {
      const userKey = checkType[typeInput];
      setUser({...user, [userKey]: textValue});
    }
    else {
      setUser({...user, [typeInput]: textValue});
    }
  }

  useEffect (changeUserInfo, [ textValue ]);

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTextValue(event.target.value);
  }

  const tp: string = (typeInput === 'password' || typeInput === 'repeat-password')
    ? 'password'
    : 'text';

  const text: string = typeInput.split('-').join(' ');

  return (
    <label htmlFor={typeInput}>
      {text}*
      <input
        id={typeInput}
        type={tp}
        placeholder={placeholderText[typeInput]}
        value={textValue}
        onChange={handleChanges}
        readOnly={isLoading} />
    </label>
  );
}

export default InputElement;
