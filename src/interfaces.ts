// DATA INTERFACES
export interface UserLoginPosting {
  email: string,
  password: string
}

export interface UserLoginReceived {
  readonly id: string,
  readonly firstName: string,
  readonly lastName: string
}

export interface UserSignupPosting {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  id?: number
}

export interface Action {
  id: number,
  action: string
}

export interface Brainstorm {
  id: number,
  question: string,
  response: string,
  action: Action,
  isGenius: boolean,
  categories: Category[]
}

export interface IBrainstormForm {
  id?: number,
  question: string,
  categories: Category[],
  action: Action,
  reset: boolean
}

export interface Category {
  id: number,
  name: string
}

export interface Insight {
  id: number,
  question: WordSample,
  answers: string[]
}

export interface WordSample {
  word: string,
  sentence: string
}

export interface AppStore {
  user: UserLoginReceived,
  allBrainstorms: Brainstorm[],
  actions: Action[],
  categories: Category[],
  readonly randomWordCollections: WordSample[],
  readonly exampleSentences: string[],
  readonly secretSauce: string[],
  currentBrainstorm: Brainstorm,
  chosenWords: string[],
  insights: Insight[],
  query: string,
  filter: string,
  timeEnded: boolean,
  instructionsEnded: boolean
}

// ACTIONS OBJECTS

export interface ActionObject {
  type: string,
  [key: string]: any
}

export interface IAddUserAction {
  type: 'ADD_USER',
  user: UserLoginReceived
}

export interface ILogoutUserAction {
  type: 'LOG_OUT_USER'
}

export interface IAddAllActionsAction {
  type: 'ADD_ALL_ACTIONS',
  actions: Action[]
}

export interface IAddNewActionAction {
  type: 'ADD_NEW_ACTION',
  action: Action
}

export interface IAddAllBrainstormsAction {
  type: 'ADD_ALL_BRAINSTORMS',
  brainstorms: Brainstorm[]
}

export interface IChangeBrainstormAction {
  type: 'TOGGLE_BRAINSTORMS',
  id: number
}

export interface IAddNewBrainstormAction {
  type: 'ADD_BRAINSTORM',
  brainstorm: Brainstorm
}

export interface IDeleteBrainstormAction {
  type: 'DELETE_BRAINSTORM',
  id: number
}

export interface IAddAllCategoriesAction {
  type: 'ADD_ALL_CATEGORIES',
  categories: Category[]
}

export interface IAddNewCategoryAction {
  type: 'ADD_CATEGORY',
  category: Category
}

export interface IAddWordSamplesAction {
  type: 'ADD_ALL_COLLECTIONS',
  collections: WordSample[]
}

export interface IAddExampleSentencesAction {
  type: 'ADD_ALL_SENTENCES',
  sentences: string[]
}

export interface IAddSecretSauceAction {
  type: 'ADD_SECRET_SAUCE',
  secretSauce: string[]
}

export interface IAddCurrentBrainstormAction {
  type: 'ADD_CURRENT_BRAINSTORM',
  currentBrainstorm: Brainstorm
}

export interface IRemoveCurrentBrainstormAction {
  type: 'REMOVE_CURRENT_BRAINSTORM'
}

export interface IAddChosenWordAction {
  type: 'ADD_WORD',
  chosenWord: string
}

export interface IRemoveChosenWordAction {
  type: 'REMOVE_WORD',
  chosenWord: string
}

export interface IAddInsightAction {
  type: 'ADD_INSIGHT',
  insight: Insight
}

export interface IRemoveInsightsAction {
  type: 'REMOVE_INSIGHTS'
}

export interface IAddQueryAction {
  type: 'ADD_QUERY',
  query: string
}

export interface IRemoveQueryAction {
  type: 'REMOVE_QUERY'
}

export interface IAddFilterAction {
  type: 'ADD_FILTER',
  filter: string
}

export interface IRemoveFilterAction {
  type: 'REMOVE_FILTER'
}

export interface IEndTimeAction {
  type: 'END_TIME'
}

export interface IReverseTimeAction {
  type: 'REVERSE_TIME'
}

export interface IEndInstructionsAction {
  type: 'END_INSTRUCTIONS'
}

export interface IReverseInstructionsAction {
  type: 'REVERSE_INSTRUCTIONS'
}

export interface IRemoveAllWordsAction {
  type: 'REMOVE_ALL_WORDS'
}

export interface ICleanStore {
  type: 'CLEAN_STORE'
}

export interface IHeaders {
  [key: string]: string
}

export interface IOptions {
  method: string,
  headers: IHeaders,
  body: string
}
