import { UserLoginReceived, ActionObject } from '../../interfaces';

export const addUser = (user: UserLoginReceived): ActionObject => ({
  type: 'ADD_USER',
  user: user
});

export const logOutUser = () => ({
  type: 'LOG_OUT_USER',
});

