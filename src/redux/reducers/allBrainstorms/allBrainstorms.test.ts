import allBrainstormsReducer from './allBrainstorms';
import { ActionObject, Brainstorm, IAddAllBrainstormsAction, IAddNewBrainstormAction, IDeleteBrainstormAction } from 'interfaces';

type emptyArray = [ ];

describe('allBrainstormsReducer', () => {
  it("should return initial value", () => {
    const mockAction: ActionObject = {
      type: '',
      brainstorms: undefined
    }

    const expected: emptyArray = [ ];
    const result = allBrainstormsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array of brainstorms if type of action is ADD_ALL_BRAINSTORMS", () => {
    const mockBrainstorms: Brainstorm[] = [{
      id: 1,
      question: 'What?',
      idea: 'Idea',
      action: 'Do sth',
      isGenius: true,
      categories: [{
        id: 1,
        name: 'Tech'
      }]
    }];

    const mockAction: IAddAllBrainstormsAction = {
      type: 'ADD_ALL_BRAINSTORMS',
      brainstorms: mockBrainstorms
    };

    const expected: Brainstorm[] = mockBrainstorms;

    const result = allBrainstormsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array with new brainstorm if type of action is ADD_BRAINSTORM", () => {
    const mockBrainstorm: Brainstorm = {
      id: 1,
      question: 'What?',
      idea: 'Idea',
      action: 'Do sth',
      isGenius: true,
      categories: [{
        id: 1,
        name: 'Tech'
      }]
    };

    const mockAction: IAddNewBrainstormAction = {
      type: 'ADD_BRAINSTORM',
      brainstorm: mockBrainstorm
    };

    const expected: Brainstorm[] = [ mockBrainstorm ];

    const result = allBrainstormsReducer([], mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array without a chosen brainstorm if type of action is DELETE_BRAINSTORM", () => {
    const mockAction: IDeleteBrainstormAction = {
      type: 'DELETE_BRAINSTORM',
      id: 1
    };

    const mockState: Brainstorm[] = [{
      id: 1,
      question: 'What?',
      idea: 'Idea',
      action: 'Do sth',
      isGenius: true,
      categories: [{
        id: 1,
        name: 'Tech'
      }]
    }];

    const expected: emptyArray = [];

    const result = allBrainstormsReducer(mockState, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array with updated brainstorm if type of action is TOGGLE_BRAINSTORMS", () => {
    const mockAction: IDeleteBrainstormAction = {
      type: 'TOGGLE_BRAINSTORMS',
      id: 1
    };

    const mockState: Brainstorm[] = [{
      id: 1,
      question: 'What?',
      idea: 'Idea',
      action: 'Do sth',
      isGenius: true,
      categories: [{
        id: 1,
        name: 'Tech'
      }]
    }];

    const expected: Brainstorm[] = [{
      id: 1,
      question: 'What?',
      idea: 'Idea',
      action: 'Do sth',
      isGenius: false,
      categories: [{
        id: 1,
        name: 'Tech'
      }]
    }];

    const result = allBrainstormsReducer(mockState, mockAction);

    expect(result).toEqual(expected);
  });
});
