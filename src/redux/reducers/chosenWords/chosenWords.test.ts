import chosenWordsReducer from './chosenWords';
import { ActionObject, IAddChosenWordAction, IAddForgottenWordsAction, IRemoveChosenWordAction, IRemoveAllWordsAction, ICleanStore } from 'interfaces';

type emptyArray = [ ];

describe('chosenWordsReducer', () => {
  it("should return initial value", () => {
    const mockAction: ActionObject = {
      type: '',
      word: undefined
    };
    const expected: emptyArray = [ ];
    const result = chosenWordsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array with a new chosen word if type of action is ADD_WORD", () => {
    const mockChosenWord: string = 'Bear';

    const mockAction: IAddChosenWordAction = {
      type: 'ADD_WORD',
      chosenWord: mockChosenWord
    };

    const expected: string[] = [mockChosenWord];

    const result: string[] = chosenWordsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return an array with three words if type of action is ADD_FORGOTTEN_WORDS", () => {
    const mockState:string[] = ['Community']
    const mockForgottenWords: string[] = ['Bear','Pie','Fly'];

    const mockAction: IAddForgottenWordsAction = {
      type: 'ADD_FORGOTTEN_WORDS',
      forgottenWords: mockForgottenWords
    };

    const expected: string[] = ['Community', 'Bear', 'Pie'];

    const result: string[] = chosenWordsReducer(mockState, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array without a chosen word if type of action is REMOVE_WORD", () => {
    const mockChosenWord: string = 'Bear';

    const mockAction: IRemoveChosenWordAction = {
      type: 'REMOVE_WORD',
      chosenWord: mockChosenWord
    };

    const expected: emptyArray = [ ];

    const result: string[] = chosenWordsReducer(['Bear'], mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the empty array if type of action is REMOVE_ALL_WORDS", () => {
    const mockAction: IRemoveAllWordsAction = {
      type: 'REMOVE_ALL_WORDS'
    };

    const expected: emptyArray = [ ];

    const result: string[] = chosenWordsReducer(['Bear'], mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the empty array if type of action is CLEAN_STORE", () => {
    const mockAction: ICleanStore = {
      type: 'CLEAN_STORE'
    };

    const expected: emptyArray = [ ];
    const result = chosenWordsReducer(['Bear'], mockAction);

    expect(result).toEqual(expected);
  });
});
