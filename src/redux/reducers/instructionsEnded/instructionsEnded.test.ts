import instructionsEndedReducer from './instructionsEnded';
import { ActionObject, ICleanStore, IEndInstructionsAction, IReverseInstructionsAction } from 'interfaces';

describe('instructionsEndedReducer', () => {
  it("should return initial value", () => {
    const mockAction: ActionObject = {
      type: '',
      isEnded: undefined
    };
    const expected: boolean = false;
    const result = instructionsEndedReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return true if type of action is END_INSTRUCTIONS", () => {
    const mockAction: IEndInstructionsAction = {
      type: 'END_INSTRUCTIONS'
    };

    const expected: boolean = true;

    const result = instructionsEndedReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return false if type of action is REVERSE_INSTRUCTIONS", () => {
    const mockAction: IReverseInstructionsAction = {
      type: 'REVERSE_INSTRUCTIONS'
    };

    const expected: boolean = false;

    const result = instructionsEndedReducer(true, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return false if type of action is CLEAN_STORE", () => {
    const mockAction: ICleanStore = {
      type: 'CLEAN_STORE'
    };

    const result = instructionsEndedReducer(true, mockAction);

    expect(result).toEqual(false);
  });
});
