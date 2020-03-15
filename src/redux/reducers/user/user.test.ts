import userReducer from './user';
import { ActionObject } from 'interfaces';
import { UserLoginReceived, ICleanStore } from 'interfaces';

describe('userReducer', () => {
  const mockUser: UserLoginReceived =  {
    firstName: 'Zedd',
    lastName: 'Icarus',
    id: '4',
  };

  it('should return the default state', () => {
    const action: ActionObject = {
      type: '',
      action: ''
    };
    const expected = {};
    const result = userReducer(undefined, action);
    expect(result).toEqual(expected);
  });

  it('should return the login info if the action type is "ADD_USER"', () => {
    const action = {
      type: 'ADD_USER',
      user: mockUser
    };

    const expected: UserLoginReceived = mockUser;

    const result = userReducer(undefined, action);
    expect(result).toEqual(expected);
  });

  it('should return an empty object is the action type is "LOG_OUT_USER"', () => {
    const action = {
      type: 'LOG_OUT_USER'
    };

    const expected = {};
    const result = userReducer(mockUser, action);
    expect(result).toEqual(expected);
  });

  it("should return the empty object if type of action is CLEAN_STORE", () => {
    const mockAction: ICleanStore = {
      type: 'CLEAN_STORE'
    };

    const result = userReducer(mockUser, mockAction);

    expect(result).toEqual({});
  });
});
