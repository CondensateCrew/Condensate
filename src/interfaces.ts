// DATA INTERFACES
export interface UserLoginPosting {
  email: string,
  password: string
}

export interface UserLoginReceived {
  readonly id: number,
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
  id?: number,
  name: string
}

export interface Brainstorm {
  id?: number,
  question: string,
  idea: string,
  action: string,
  isGenius: boolean,
  categories: number[]
}

export interface Category {
  id: number,
  name: string
}

export interface Insight {
  id: number,
  question: string,
  answers: string[]
}

export interface WordContext {
  type: string,
  connectedWord: string[]
}

export interface RandomWordCollection {
  [key: string]: WordContext
}

export interface AppStore {
  user: UserLoginReceived,
  allBrainstorms: Brainstorm[],
  actions: Action[],
  categories: Category[],
  readonly randomWordCollections: RandomWordCollection[],
  readonly questionTemplates: string[],
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
