import categoriesReducer from './categories';
import { ActionObject, Category, IAddAllCategoriesAction, IAddNewCategoryAction, ICleanStore } from 'interfaces';

type emptyArray = [ ];

describe('categoriesReducer', () => {
  const mockCategory: Category = {
    id: 1,
    name: 'Tech'
  };

  it("should return initial value", () => {
    const mockAction: ActionObject = {
      type: '',
      categories: undefined
    };

    const expected: emptyArray = [ ];
    const result = categoriesReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array of categories if type of action is ADD_ALL_CATEGORIES", () => {
    const mockCategories: Category[] = [{
      id: 1,
      name: 'Tech'
    }];

    const mockAction: IAddAllCategoriesAction = {
      type: 'ADD_ALL_CATEGORIES',
      categories: mockCategories
    };

    const expected: Category[] = mockCategories;

    const result: Category[] = categoriesReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array with added category if type of action is ADD_CATEGORY", () => {
    const mockAction: IAddNewCategoryAction = {
      type: 'ADD_CATEGORY',
      category: mockCategory
    };

    const expected: Category[] = [ mockCategory ];

    const result: Category[] = categoriesReducer([], mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the empty array if type of action is CLEAN_STORE", () => {
    const mockAction: ICleanStore = {
      type: 'CLEAN_STORE'
    };

    const expected: emptyArray = [ ];
    const result = categoriesReducer([mockCategory], mockAction);

    expect(result).toEqual(expected);
  });
});
