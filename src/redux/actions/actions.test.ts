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

describe("randomWordCollections", () => {
  it("should return object with a type of ADD_ALL_COLLECTIONS when addRandomWordCollections is called", () => {
    const collectionsMock: interfaces.RandomWordCollection[] = [{
      'goose': {
        type: 'noun',
        connectedWord: ['duck', 'happy', 'dinner']
      }
    }];

    const expected: interfaces.IAddRandomWordCollectionsAction = {
      type: 'ADD_ALL_COLLECTIONS',
      collections: collectionsMock
    };

    const result = actions.addRandomWordCollections(collectionsMock)

    expect(result).toEqual(expected);
  });
});

describe("questionTemplates", () => {
  it("should return object with a type of ADD_ALL_COLLECTIONS when addQuestionTemplates is called", () => {
    const questionsMock: string[] = [
      'What does <sth> do with <sec>?'
    ];

    const expected: interfaces.IAddQuestionTemplatesAction = {
      type: 'ADD_ALL_TEMPLATES',
      templates: questionsMock
    };

    const result = actions.addQuestionTemplates(questionsMock)

    expect(result).toEqual(expected);
  });
});

describe("secretSauce", () => {
  it("should return object with a type of ADD_SECRETE_SAUSE when addSecretSauce is called", () => {
    const secretSauceMock: string[] = [
      'winter', 'development'
    ];

    const expected: interfaces.IAddSecretSauceAction = {
      type: 'ADD_SECRETE_SAUSE',
      secretSauce: secretSauceMock
    };

    const result = actions.addSecretSauce(secretSauceMock)

    expect(result).toEqual(expected);
  });
});

describe("currentBrainstorm", () => {
  it("should return object with a type of ADD_CURRENT_BRAINSTORM when addCurrentBrainstorm is called", () => {
    const currentBrainstormMock: interfaces.Brainstorm = {
      id: 1,
      question: 'What?',
      idea: 'Idea',
      action: 'Build',
      categories: [{id: 1, name: "Tech"}],
      isGenius: true
    };

    const expected: interfaces.IAddCurrentBrainstormAction = {
      type: 'ADD_CURRENT_BRAINSTORM',
      currentBrainstorm: currentBrainstormMock
    };

    const result = actions.addCurrentBrainstorm(currentBrainstormMock)

    expect(result).toEqual(expected);
  });

  it("should return object with a type of REMOVE_CURRENT_BRAINSTORM when removeCurrentBrainstorm is called", () => {
    const expected: interfaces.IRemoveCurrentBrainstormAction = {
      type: 'REMOVE_CURRENT_BRAINSTORM'
    };

    const result = actions.removeCurrentBrainstorm()

    expect(result).toEqual(expected);
  });
});

describe("chosenWords", () => {
  it("should return object with a type of ADD_WORD when addChosenWord is called", () => {
    const wordMock: string = 'Elephant';

    const expected: interfaces.IAddChosenWordAction = {
      type: 'ADD_WORD',
      chosenWord: wordMock
    };

    const result = actions.addChosenWord(wordMock)

    expect(result).toEqual(expected);
  });

  it("should return object with a type of REMOVE_WORD when removeChosenWord is called", () => {
    const wordMock: string = 'Elephant';

    const expected: interfaces.IRemoveChosenWordAction = {
      type: 'REMOVE_WORD',
      chosenWord: wordMock
    };

    const result = actions.removeChosenWord(wordMock)

    expect(result).toEqual(expected);
  });
});

describe("insights", () => {
  it("should return object with a type of ADD_INSIGHT when addInsight is called", () => {
    const insightMock: interfaces.Insight = {
      id: 1,
      question: 'What?',
      answers: ['Doing']
    };

    const expected: interfaces.IAddInsightAction = {
      type: 'ADD_INSIGHT',
      insight: insightMock
    };

    const result = actions.addInsight(insightMock)

    expect(result).toEqual(expected);
  });
});

describe("query", () => {
  it("should return object with a type of ADD_QUERY when addQuery is called", () => {
    const queryMock: string = 'App';

    const expected: interfaces.IAddQueryAction = {
      type: 'ADD_QUERY',
      query: queryMock
    };

    const result = actions.addQuery(queryMock)

    expect(result).toEqual(expected);
  });

  it("should return object with a type of REMOVE_QUERY when removeQuery is called", () => {
    const expected: interfaces.IRemoveQueryAction = {
      type: 'REMOVE_QUERY'
    };

    const result = actions.removeQuery()

    expect(result).toEqual(expected);
  });
});

