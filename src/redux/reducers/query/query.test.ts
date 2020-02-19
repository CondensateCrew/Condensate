import queryReducer from './query';
import { ActionObject } from 'interfaces';

describe('queryReducer', () => {
  it("should return initial value", () => {
    const expected: string = '';
    const result = queryReducer(undefined, {type: '', query: undefined });

    expect(result).toEqual(expected);
  });

  it("should return a query string if type of action is ADD_QUERY", () => {
    const mockFilter: string = 'Tech';

    const mockAction: ActionObject = {
      type: 'ADD_QUERY',
      query: mockFilter
    };

    const expected: string = mockFilter;

    const result: string = queryReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  })
});
