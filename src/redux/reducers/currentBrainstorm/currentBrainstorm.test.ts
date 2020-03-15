import currentBrainstormReducer from './currentBrainstorm';
import { ActionObject, Brainstorm, IAddCurrentBrainstormAction, IRemoveCurrentBrainstormAction, ICleanStore } from 'interfaces';

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
      id: 1,
      question: 'What?',
      response: 'Idea',
      action: {id: 1, action: 'Do sth'},
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

  it("should return the empty object if type of action is REMOVE_CURRENT_BRAINSTORM", () => {
    const mockAction: IRemoveCurrentBrainstormAction = {
      type: 'REMOVE_CURRENT_BRAINSTORM'
    };

    const expected: emptyObject = { };

    const result: Brainstorm = currentBrainstormReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the empty object if type of action is CLEAN_STORE", () => {
    const mockBrainstorm: Brainstorm = {
      id: 1,
      question: 'What?',
      response: 'Idea',
      action: {id: 1, action: 'Do sth'},
      isGenius: true,
      categories: [{id: 1, name: 'Tech'}]
    };

    const mockAction: ICleanStore = {
      type: 'CLEAN_STORE'
    };

    const expected: emptyObject = {};
    const result = currentBrainstormReducer(mockBrainstorm, mockAction);

    expect(result).toEqual(expected);
  });
});
