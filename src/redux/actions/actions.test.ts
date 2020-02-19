import * as interfaces from '../../interfaces';
import * as actions from './';

describe("user", () => {
  it("should return object with a type of ADD_USER when addUser is called", () => {
    const userMock: interfaces.UserLoginReceived = {
      id: 1,
      firstName: 'Ray',
      lastName: 'Z'
    };

    const expected: interfaces.IAddUserAction = {
      type: 'ADD_USER',
      user: userMock
    };

    const result = actions.addUser(userMock);

    expect(result).toEqual(expected);
  });

  it("should return object with a type of LOG_OUT_USER when logOutUser is called", () => {
    const expected: interfaces.ILogoutUserAction = {
      type: 'LOG_OUT_USER'
    };

    const result = actions.logOutUser();

    expect(result).toEqual(expected);
  });
});

describe("actions", () => {
  it("should return object with a type of ADD_ALL_ACTIONS when addAllActions is called", () => {
    const actionsMock: interfaces.Action[] = [{
      id: 1,
      name: 'Build an app'
    }];

    const expected: interfaces.IAddAllActionsAction = {
      type: 'ADD_ALL_ACTIONS',
      actions: actionsMock
    };

    const result = actions.addAllActions(actionsMock)

    expect(result).toEqual(expected);
  });

  it("should return object with a type of ADD_NEW_ACTION when addNewAction is called", () => {
    const actionMock: interfaces.Action = {
      id: 1,
      name: 'Build an app'
    };

    const expected: interfaces.IAddNewActionAction = {
      type: 'ADD_NEW_ACTION',
      action: actionMock
    };

    const result = actions.addNewAction(actionMock)

    expect(result).toEqual(expected);
  });
});

describe("allBrainstorms", () => {
  it("should return object with a type of ADD_ALL_BRAINSTORMS when addAllBrainstorms is called", () => {
    const brainstormsMock: interfaces.Brainstorm[] = [{
      id: 1,
      question: 'What?',
      idea: 'Idea',
      action: 'Build',
      categories: [{id: 1, name: "Tech"}],
      isGenius: true
    }];

    const expected: interfaces.IAddAllBrainstormsAction = {
      type: 'ADD_ALL_BRAINSTORMS',
      brainstorms: brainstormsMock
    };

    const result = actions.addAllBrainstorms(brainstormsMock)

    expect(result).toEqual(expected);
  });

  it("should return object with a type of ADD_BRAINSTORM when addNewBrainstorm is called", () => {
    const brainstormMock: interfaces.Brainstorm = {
      id: 1,
      question: 'What?',
      idea: 'Idea',
      action: 'Build',
      categories: [{id: 1, name: "Tech"}],
      isGenius: true
    };

    const expected: interfaces.IAddNewBrainstormAction = {
      type: 'ADD_BRAINSTORM',
      brainstorm: brainstormMock
    };

    const result = actions.addNewBrainstorm(brainstormMock)

    expect(result).toEqual(expected);
  });

  it("should return object with a type of DELETE_BRAINSTORM when deleteBrainstorm is called", () => {
    const expected: interfaces.IDeleteBrainstormAction = {
      type: 'DELETE_BRAINSTORM',
      id: 1
    };

    const result = actions.deleteBrainstorm(1)

    expect(result).toEqual(expected);
  });
});

describe("categories", () => {
  it("should return object with a type of ADD_ALL_CATEGORIES when addAllCategories is called", () => {
    const categoiesMock: interfaces.Category[] = [{
      id: 1,
      name: 'Tech'
    }];

    const expected: interfaces.IAddAllCategoriesAction = {
      type: 'ADD_ALL_CATEGORIES',
      categories: categoiesMock
    };

    const result = actions.addAllCategories(categoiesMock)

    expect(result).toEqual(expected);
  });

  it("should return object with a type of ADD_CATEGORY when addNewCategory is called", () => {
    const categoryMock: interfaces.Category = {
      id: 1,
      name: 'Tech'
    };

    const expected: interfaces.IAddNewCategoryAction = {
      type: 'ADD_CATEGORY',
      category: categoryMock
    };

    const result = actions.addNewCategory(categoryMock)

    expect(result).toEqual(expected);
  });
});

