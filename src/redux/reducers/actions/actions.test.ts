import actionsReducer from './actions';
import { ActionObject } from 'interfaces';

type emptyArray = [];

describe('actionsReducer', () => {
  it("should return initial value", () => {
    const expected: emptyArray = [];
    const result = actionsReducer(undefined, {type: '', actions: undefined });

    expect(result).toEqual(expected);
  });

  it("should return the array of actions words if type of action is ADD_ACTIONS", () => {
    const mockActions: string[] = [
      'Build an app'
    ];

    const mockAction: ActionObject = {
      type: 'ADD_ACTIONS',
      actions: mockActions
    };

    const expected: string[] = mockActions;

    const result: string[] = actionsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  })
});
