import * as interfaces from '../../interfaces';
import * as actions from './';

describe("user", () => {
  it("should return object with a type of ADD_USER when addUser is called", () => {
    const userMock: interfaces.UserLoginReceived = {
      id: 1,
      firstName: 'Ray',
      lastName: 'Z'
    };

    const expected: interfaces.IAddUserAction = {
      type: 'ADD_USER',
      user: userMock
    };

    const result = actions.addUser(userMock);

    expect(result).toEqual(expected);
  });

  it("should return object with a type of LOG_OUT_USER when logOutUser is called", () => {
    const expected: interfaces.ILogoutUserAction = {
      type: 'LOG_OUT_USER'
    };

    const result = actions.logOutUser();

    expect(result).toEqual(expected);
  });
});

