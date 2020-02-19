import currentBrainstormReducer from './currentBrainstorm';
import { ActionObject, Brainstorm, IAddCurrentBrainstormAction, IRemoveCurrentBrainstormAction } from 'interfaces';

type emptyObject = { };

describe('currentBrainstormReducer', () => {
  it("should return initial value", () => {
    const mockAction: ActionObject = {
      type: '',
      currentBrainstorm: undefined
    };
    const expected: emptyObject = { };
    const result = currentBrainstormReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the current brainstorm if type of action is ADD_CURRENT_BRAINSTORM", () => {
    const mockBrainstorm: Brainstorm = {
      question: 'What?',
      idea: 'Idea',
      action: 'Do sth',
      isGenius: true,
      categories: [{id: 1, name: 'Tech'}]
    };

    const mockAction: IAddCurrentBrainstormAction = {
      type: 'ADD_CURRENT_BRAINSTORM',
      currentBrainstorm: mockBrainstorm
    };

    const expected: Brainstorm = mockBrainstorm;

    const result: Brainstorm = currentBrainstormReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the empty array if type of action is REMOVE_CURRENT_BRAINSTORM", () => {
    const mockAction: IRemoveCurrentBrainstormAction = {
      type: 'REMOVE_CURRENT_BRAINSTORM'
    };

    const expected: emptyObject = { };

    const result: Brainstorm = currentBrainstormReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });
});
