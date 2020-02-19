import userReducer from './user';
import { ActionObject } from 'interfaces';
import { UserLoginReceived } from 'interfaces';

describe('userReducer', () => {
  let action: ActionObject;

  beforeEach(() => {
    action = {type: '', payload: {}}
  });

  it('should return the default state', () => {
    const expected = {}
    const result = userReducer(undefined, action)
    expect(result).toEqual(expected)
  });

  it('should return the login info if the action type is "ADD_USER"', () => {
    const mockUser =  {
      firstName: 'Zedd',
      lastName: 'Icarus',
      id: 4,
    };
    const action = {type: 'ADD_USER', user: mockUser};

    const expected = {
      firstName: 'Zedd',
      lastName: 'Icarus',
      id: 4,
    };

    const result = userReducer(undefined, action);
    expect(result).toEqual(expected);
  });

  it('should return an empty object is the action type is "LOG_OUT_USER"', () => {
    const action = {type: 'LOG_OUT_USER'};
    const expected = {};
    const result = userReducer({id: 4, firstName: 'Zedd', lastName: 'Icarus'}, action);
    expect(result).toEqual(expected);
  });
});
