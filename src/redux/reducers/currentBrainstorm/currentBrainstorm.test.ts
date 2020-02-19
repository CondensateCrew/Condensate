import currentBrainstormReducer from './currentBrainstorm';
import { ActionObject, Brainstorm } from 'interfaces';

type emptyObject = { };

describe('currentBrainstormReducer', () => {
  it("should return initial value", () => {
    const expected: emptyObject = { };
    const result = currentBrainstormReducer(undefined, {type: '', currentBrainstorm: undefined });

    expect(result).toEqual(expected);
  });

  it("should return the current brainstorm if type of action is ADD_CURRENT_BRAINSTORM", () => {
    const mockBrainstorm: Brainstorm = {
      question: 'What?',
      idea: 'Idea',
      action: 'Do sth',
      isGenius: true,
      categories: [1, 2]
    };

    const mockAction: ActionObject = {
      type: 'ADD_CURRENT_BRAINSTORM',
      currentBrainstorm: mockBrainstorm
    };

    const expected: Brainstorm = mockBrainstorm;

    const result: Brainstorm = currentBrainstormReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  })
});
