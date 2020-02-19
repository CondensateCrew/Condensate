import secretSauceReducer from './secretSauce';
import { ActionObject } from 'interfaces';

type emptyArray = [];

describe('secretSauceReducer', () => {
  it("should return initial value", () => {
    const expected: emptyArray = [];
    const result = secretSauceReducer(undefined, {type: '', words: undefined });

    expect(result).toEqual(expected);
  });

  it("should return the array of random words if type of action is ADD_SECRET_SAUCE", () => {
    const mockWords: string[] = [
      'rose', 'clue'
    ];

    const mockAction: ActionObject = {
      type: 'ADD_SECRET_SAUCE',
      words: mockWords
    };

    const expected: string[] = mockWords;

    const result: string[] = secretSauceReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  })
});
