import {
  Action,
  Category,
  Brainstorm,
  UserLoginReceived,
  WordSample,
  Insight,
  IAddUserAction,
  ILogoutUserAction,
  IAddAllActionsAction,
  IAddNewActionAction,
  IAddAllBrainstormsAction,
  IChangeBrainstormAction,
  IAddNewBrainstormAction,
  IDeleteBrainstormAction,
  IAddAllCategoriesAction,
  IAddNewCategoryAction,
  IAddWordSamplesAction,
  IAddExampleSentencesAction,
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
  IReverseInstructionsAction,
  IRemoveAllWordsAction,
  ICleanStore
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

export const toggleBrainstorm = (id: number): IChangeBrainstormAction => ({
  type: 'TOGGLE_BRAINSTORMS',
  id: id
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
export const addWordSamples = (collections: WordSample[]): IAddWordSamplesAction => ({
  type: 'ADD_ALL_COLLECTIONS',
  collections: collections
});

// exampleSentences reducer action creators
export const addExampleSentences = (sentences: string[]): IAddExampleSentencesAction => ({
  type: 'ADD_ALL_SENTENCES',
  sentences: sentences
});

// secretSauce reducer action creators
export const addSecretSauce = (secretSauce: string[]): IAddSecretSauceAction => ({
  type: 'ADD_SECRET_SAUCE',
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

export const removeAllWords = (): IRemoveAllWordsAction => ({
  type: 'REMOVE_ALL_WORDS'
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

export const cleanStore = (): ICleanStore => ({
  type: 'CLEAN_STORE'
})
