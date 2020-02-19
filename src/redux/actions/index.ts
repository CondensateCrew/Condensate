import {
  Action,
  Category,
  Brainstorm,
  UserLoginReceived,
  RandomWordCollection,
  Insight,
  ActionObject
} from '../../interfaces';

// user reducer action creators
export const addUser = (user: UserLoginReceived): ActionObject => ({
  type: 'ADD_USER',
  user: user
});

export const logOutUser = (): ActionObject => ({
  type: 'LOG_OUT_USER',
});

// actions reducer action creators
export const addAllActions = (actions: Action[]): ActionObject => ({
  type: 'ADD_ALL_ACTIONS',
  actions: actions
});

export const addNewAction = (action: Action): ActionObject => ({
  type: 'ADD_NEW_ACTIONS',
  action: action
});

// allBrainstorms reducer action creators
export const addAllBrainstorms = (brainstorms: Brainstorm[]): ActionObject => ({
  type: 'ADD_ALL_BRAINSTORMS',
  brainstorms: brainstorms
});

export const addNewBrainstorm = (brainstorm: Brainstorm): ActionObject => ({
  type: 'ADD_BRAINSTORM',
  brainstorm: brainstorm
});

export const deleteBrainstorm = (id: number): ActionObject => ({
  type: 'DELETE_BRAINSTORM',
  id: id
});

// categories reducer action creators
export const addAllCategories = (categories: Category[]): ActionObject => ({
  type: 'ADD_ALL_CATEGORIES',
  categories: categories
});

export const addNewCategory = (category: Category): ActionObject => ({
  type: 'ADD_CATEGORY',
  category: category
});

export const deleteCategory = (id: number): ActionObject => ({
  type: 'DELETE_BRAINSTORM',
  id: id
});

// randomWordCollections reducer action creators
export const addRandomWordCollections = (collections: RandomWordCollection[]): ActionObject => ({
  type: 'ADD_ALL_COLLECTIONS',
  collections: collections
});

// questionTemplates reducer action creators
export const addQuestionTemplates = (templates: string[]): ActionObject => ({
  type: 'ADD_ALL_TEMPLATES',
  templates: templates
});

// secretSauce reducer action creators
export const addSecretSauce = (secretSauce: string[]): ActionObject => ({
  type: 'ADD_ALL_TEMPLATES',
  secretSauce: secretSauce
});

// currentBrainstorm reducer action creators
export const addCurrentBrainstorm = (currentBrainstorm: Brainstorm): ActionObject => ({
  type: 'ADD_CURRENT_BRAINSTORM',
  currentBrainstorm: currentBrainstorm
});

export const removeCurrentBrainstorm = (): ActionObject => ({
  type: 'REMOVE_CURRENT_BRAINSTORM'
});

// chosenWords reducer action creators
export const addChosenWord = (chosenWord: string): ActionObject => ({
  type: 'ADD_WORD',
  chosenWord: chosenWord
});

export const removeChosenWord = (chosenWord: string): ActionObject => ({
  type: 'REMOVE_WORD',
  chosenWord: chosenWord
});

// insights reducer action creators
export const addInsight = (insight: Insight): ActionObject => ({
  type: 'ADD_INSIGHT',
  insight: insight
});

// query reducer action creators
export const addQuery = (query: string): ActionObject => ({
  type: 'ADD_QUERY',
  query: query
});

export const removeQuery = (): ActionObject => ({
  type: 'REMOVE_QUERY'
});

// filter reducer action creators
export const addFilter = (filter: string): ActionObject => ({
  type: 'ADD_FILTER',
  filter: filter
});

export const removeFilter = (): ActionObject => ({
  type: 'REMOVE_FILTER'
});

// timeEnded reducer action creators
export const endTime = (): ActionObject => ({
  type: 'END_TIME'
});

export const clearTime = (): ActionObject => ({
  type: 'CLEAR_TIME'
});

// instructionsEnded reducer action creators
export const endInstructions = (): ActionObject => ({
  type: 'END_INSTRUCTIONS'
});

export const clearInstructions = (): ActionObject => ({
  type: 'CLEAR_INSTRUCTIONS'
});
