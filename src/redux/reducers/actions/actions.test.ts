import actionsReducer from './actions';
import { Action, ActionObject, IAddAllActionsAction, IAddNewActionAction, ICleanStore } from 'interfaces';

type emptyArray = [];

describe('actionsReducer', () => {
  it("should return initial value", () => {
    const mockAction: ActionObject = {
      type: '',
      actions: undefined
    };
    const expected: emptyArray = [];
    const result = actionsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array of action words if type of action is ADD_ALL_ACTIONS", () => {
    const mockActions: Action[] = [{
      id: 1,
      action: 'Build an app'
    }];

    const mockAction: IAddAllActionsAction = {
      type: 'ADD_ALL_ACTIONS',
      actions: mockActions
    };

    const expected: Action[] = mockActions;

    const result = actionsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array with added action if type of action is ADD_NEW_ACTION", () => {
    const mockBrainstormAction: Action = {
      id: 1,
      action: 'Build an app'
    };

    const mockAction: IAddNewActionAction = {
      type: 'ADD_NEW_ACTION',
      action: mockBrainstormAction
    };

    const expected: Action[] = [mockBrainstormAction];

    const result = actionsReducer([], mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the empty array", () => {
    const mockActions: Action[] = [{
      id: 1,
      action: 'Build an app'
    }];

    const mockAction: ICleanStore = {
      type: 'CLEAN_STORE'
    };
    const expected: emptyArray = [];
    const result = actionsReducer(mockActions, mockAction);

    expect(result).toEqual(expected);
  });
});
