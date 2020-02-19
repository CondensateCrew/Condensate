import allBrainstormsReducer from './allBrainstorms';
import { ActionObject, Brainstorm } from 'interfaces';

type emptyArray = [ ];

describe('allBrainstormsReducer', () => {
  it("should return initial value", () => {
    const expected: emptyArray = [ ];
    const result = allBrainstormsReducer(undefined, {type: '', brainstorms: undefined });

    expect(result).toEqual(expected);
  });

  it("should return the array of brainstorms if type of action is ADD_BRAINSTORMS", () => {
    const mockBrainstorms: Brainstorm[] = [{
      question: 'What?',
      idea: 'Idea',
      action: 'Do sth',
      isGenius: true,
      categories: [1, 2]
    }];

    const mockAction: ActionObject = {
      type: 'ADD_BRAINSTORMS',
      brainstorms: mockBrainstorms
    };

    const expected: Brainstorm[] = mockBrainstorms;

    const result: Brainstorm[] = allBrainstormsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  })
});
