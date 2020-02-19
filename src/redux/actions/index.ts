import {
  Action,
  Category,
  Brainstorm,
  UserLoginReceived,
  RandomWordCollection,
  Insight,
  ActionObject,
  IAddUserAction,
  ILogoutUserAction,
  IAddAllActionsAction,
  IAddNewActionAction,
  IAddAllBrainstormsAction,
  IAddNewBrainstormAction,
  IDeleteBrainstormAction,
  IAddAllCategoriesAction,
  IAddNewCategoryAction,
  IAddRandomWordCollectionsAction,
  IAddQuestionTemplatesAction,
  IAddSecretSauceAction,
  IAddCurrentBrainstormAction,
  IRemoveCurrentBrainstormAction,
  IAddChosenWordAction,
  IRemoveChosenWordAction,
  IAddInsightAction,
  IAddQueryAction,
  IRemoveQueryAction,
  IAddFilterAction,
  IRemoveFilterAction,
  IEndTimeAction,
  IReverseTimeAction,
  IEndInstructionsAction,
  IReverseInstructionsAction
} from 'interfaces';

// user reducer action creators
export const addUser = (user: UserLoginReceived): IAddUserAction => ({
  type: 'ADD_USER',
  user: user
});

export const logOutUser = (): ILogoutUserAction => ({
  type: 'LOG_OUT_USER',
});

// actions reducer action creators
export const addAllActions = (actions: Action[]): IAddAllActionsAction => ({
  type: 'ADD_ALL_ACTIONS',
  actions: actions
});

export const addNewAction = (action: Action): IAddNewActionAction => ({
  type: 'ADD_NEW_ACTION',
  action: action
});

// allBrainstorms reducer action creators
export const addAllBrainstorms = (brainstorms: Brainstorm[]): IAddAllBrainstormsAction => ({
  type: 'ADD_ALL_BRAINSTORMS',
  brainstorms: brainstorms
});

export const addNewBrainstorm = (brainstorm: Brainstorm): IAddNewBrainstormAction => ({
  type: 'ADD_BRAINSTORM',
  brainstorm: brainstorm
});

export const deleteBrainstorm = (id: number): IDeleteBrainstormAction => ({
  type: 'DELETE_BRAINSTORM',
  id: id
});

// categories reducer action creators
export const addAllCategories = (categories: Category[]): IAddAllCategoriesAction => ({
  type: 'ADD_ALL_CATEGORIES',
  categories: categories
});

export const addNewCategory = (category: Category): IAddNewCategoryAction => ({
  type: 'ADD_CATEGORY',
  category: category
});

// randomWordCollections reducer action creators
export const addRandomWordCollections = (collections: RandomWordCollection[]): IAddRandomWordCollectionsAction => ({
  type: 'ADD_ALL_COLLECTIONS',
  collections: collections
});

// questionTemplates reducer action creators
export const addQuestionTemplates = (templates: string[]): IAddQuestionTemplatesAction => ({
  type: 'ADD_ALL_TEMPLATES',
  templates: templates
});

// secretSauce reducer action creators
export const addSecretSauce = (secretSauce: string[]): IAddSecretSauceAction => ({
  type: 'ADD_SECRETE_SAUSE',
  secretSauce: secretSauce
});

// currentBrainstorm reducer action creators
export const addCurrentBrainstorm = (currentBrainstorm: Brainstorm): IAddCurrentBrainstormAction => ({
  type: 'ADD_CURRENT_BRAINSTORM',
  currentBrainstorm: currentBrainstorm
});

export const removeCurrentBrainstorm = (): IRemoveCurrentBrainstormAction => ({
  type: 'REMOVE_CURRENT_BRAINSTORM'
});

// chosenWords reducer action creators
export const addChosenWord = (chosenWord: string): IAddChosenWordAction => ({
  type: 'ADD_WORD',
  chosenWord: chosenWord
});

export const removeChosenWord = (chosenWord: string): IRemoveChosenWordAction => ({
  type: 'REMOVE_WORD',
  chosenWord: chosenWord
});

// insights reducer action creators
export const addInsight = (insight: Insight): IAddInsightAction => ({
  type: 'ADD_INSIGHT',
  insight: insight
});

// query reducer action creators
export const addQuery = (query: string): IAddQueryAction => ({
  type: 'ADD_QUERY',
  query: query
});

export const removeQuery = (): IRemoveQueryAction => ({
  type: 'REMOVE_QUERY'
});

// filter reducer action creators
export const addFilter = (filter: string): IAddFilterAction => ({
  type: 'ADD_FILTER',
  filter: filter
});

export const removeFilter = (): IRemoveFilterAction => ({
  type: 'REMOVE_FILTER'
});

// timeEnded reducer action creators
export const endTime = (): IEndTimeAction => ({
  type: 'END_TIME'
});

export const reverseTime = (): IReverseTimeAction => ({
  type: 'REVERSE_TIME'
});

// instructionsEnded reducer action creators
export const endInstructions = (): IEndInstructionsAction => ({
  type: 'END_INSTRUCTIONS'
});

export const reverseInstructions = (): IReverseInstructionsAction => ({
  type: 'REVERSE_INSTRUCTIONS'
});
