import secretSauceReducer from './secretSauce';
import { ActionObject } from 'interfaces';

type emptyArray = [];

describe('secretSauceReducer', () => {
  it("should return initial value", () => {
    const mockAction: ActionObject = {
      type: '',
      secretSauce: undefined
    };
    const expected: emptyArray = [];
    const result = secretSauceReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array of random words if type of action is ADD_SECRET_SAUCE", () => {
    const mockWords: string[] = [
      'rose', 'clue'
    ];

    const mockAction: ActionObject = {
      type: 'ADD_SECRET_SAUCE',
      secretSauce: mockWords
    };

    const expected: string[] = mockWords;

    const result: string[] = secretSauceReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  })
});
