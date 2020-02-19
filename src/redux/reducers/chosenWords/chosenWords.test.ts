import chosenWordsReducer from './chosenWords';
import { ActionObject } from 'interfaces';

type emptyArray = [ ];

describe('chosenWordsReducer', () => {
  it("should return initial value", () => {
    const expected: emptyArray = [ ];
    const result = chosenWordsReducer(undefined, {type: '', word: undefined });

    expect(result).toEqual(expected);
  });

  it("should return the array with a new chosen word if type of action is ADD_SELECTED_WORD", () => {
    const mockChosenWord: string = 'Bear';

    const mockAction: ActionObject = {
      type: 'ADD_SELECTED_WORD',
      word: mockChosenWord
    };

    const expected: string[] = [mockChosenWord];

    const result: string[] = chosenWordsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  })
});
