import categoriesReducer from './categories';
import { ActionObject, Category } from 'interfaces';

type emptyArray = [ ];

describe('categoriesReducer', () => {
  it("should return initial value", () => {
    const expected: emptyArray = [ ];
    const result = categoriesReducer(undefined, {type: '', categories: undefined });

    expect(result).toEqual(expected);
  });

  it("should return the array of categories if type of action is ADD_CATEGORIES", () => {
    const mockCategories: Category[] = [{
      id: 1,
      name: 'Tech'
    }];

    const mockAction: ActionObject = {
      type: 'ADD_CATEGORIES',
      categories: mockCategories
    };

    const expected: Category[] = mockCategories;

    const result: Category[] = categoriesReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  })
});
