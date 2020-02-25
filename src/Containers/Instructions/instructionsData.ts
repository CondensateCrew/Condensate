interface IInstructionsData {
  instructions: string[],
  link: string
}

interface ITypesData {
  [key: string]: IInstructionsData
}

export const firstIinstructions: IInstructionsData  = {
  instructions: [
    'In the next 90 seconds choose 9 words',
    'Choose whichever words compel you',
    'They should elicit positive feelings',
    'Relax',
    'Enjoy'
  ],
  link: '/round-one'
};

export const secondIinstructions: IInstructionsData  = {
  instructions: [
    'You will have 90 seconds',
    'To write as many questions as you can',
    'Try to write the first thing that comes to your mind',
    'The more spontaneous and provocative the better!'
  ],
  link: '/round-two'
};

const types: ITypesData = {
  'first-rd': firstIinstructions,
  'second-rd': secondIinstructions
}

export default types
