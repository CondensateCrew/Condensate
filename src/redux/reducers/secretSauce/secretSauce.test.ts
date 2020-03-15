import secretSauceReducer from './secretSauce';
import { ActionObject, IAddSecretSauceAction, ICleanStore } from 'interfaces';

type emptyArray = [];

describe('secretSauceReducer', () => {
  const mockWords: string[] = [
    'rose', 'clue'
  ];

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
    const mockAction: IAddSecretSauceAction = {
      type: 'ADD_SECRET_SAUCE',
      secretSauce: mockWords
    };

    const expected: string[] = mockWords;

    const result: string[] = secretSauceReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the empty array if type of action is CLEAN_STORE", () => {
    const mockAction: ICleanStore = {
      type: 'CLEAN_STORE'
    };

    const expected: emptyArray = [ ];
    const result = secretSauceReducer(mockWords, mockAction);

    expect(result).toEqual(expected);
  });
});
