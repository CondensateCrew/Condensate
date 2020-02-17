export interface UserLoginPosting {
  email: string,
  password: string
}

export interface UserLoginReceived {
  readonly email: string,
  readonly firstName: string,
  readonly lastName: string
}

export interface UserSignupPosting {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
}

export interface Brainstorm {
  id?: number,
  question: string,
  idea: string,
  action: string,
  isGenius: string,
  categories: number[]
}

export interface Category {
  id: number,
  name: string
}

export interface WordContext {
  type: string,
  connectedWord: string[]
}

export interface randomWordCollection {
  [key: string]: WordContext
}
