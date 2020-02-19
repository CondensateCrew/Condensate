import filterReducer from './filter';
import { ActionObject } from 'interfaces';

describe('filterReducer', () => {
  it("should return initial value", () => {
    const expected: string = '';
    const result = filterReducer(undefined, {type: '', filter: undefined });

    expect(result).toEqual(expected);
  });

  it("should return a filter string if type of action is ADD_FILTER", () => {
    const mockFilter: string = 'Tech';

    const mockAction: ActionObject = {
      type: 'ADD_FILTER',
      filter: mockFilter
    };

    const expected: string = mockFilter;

    const result: string = filterReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  })
});
