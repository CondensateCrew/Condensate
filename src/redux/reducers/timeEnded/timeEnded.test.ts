import timeEndedReducer from './timeEnded';
import { ActionObject, IEndTimeAction, IReverseTimeAction, ICleanStore } from 'interfaces';

describe('instructionsEndedReducer', () => {
  it("should return initial value", () => {
    const mockAction: ActionObject = {
      type: '',
      isEnded: undefined
    };
    const expected: boolean = false;
    const result = timeEndedReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return true if type of action is END_TIME", () => {
    const mockAction: IEndTimeAction = {
      type: 'END_TIME'
    };

    const expected: boolean = true;

    const result = timeEndedReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return false if type of action is REVERSE_TIME", () => {
    const mockAction: IReverseTimeAction = {
      type: 'REVERSE_TIME'
    };

    const expected: boolean = false;

    const result = timeEndedReducer(true, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return false if type of action is CLEAN_STORE", () => {
    const mockAction: ICleanStore = {
      type: 'CLEAN_STORE'
    };

    const result = timeEndedReducer(true, mockAction);

    expect(result).toEqual(false);
  });
});
