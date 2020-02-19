import timeEndedReducer from './timeEnded';
import { ActionObject } from 'interfaces';

describe('instructionsEndedReducer', () => {
  it("should return initial value", () => {
    const expected: boolean = false;
    const result = timeEndedReducer(undefined, {type: '', isEnded: undefined });

    expect(result).toEqual(expected);
  });

  it("should return the result of instructions end if type of action is CHANGE_IS_ENDED", () => {
    const mockAction: ActionObject = {
      type: 'CHANGE_IS_ENDED',
      isEnded: true
    };

    const expected: boolean = true;

    const result: boolean = timeEndedReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  })
});
