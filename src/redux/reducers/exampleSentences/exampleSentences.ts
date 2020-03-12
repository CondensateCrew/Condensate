import { ActionObject } from 'interfaces';

type state = string[] | [];

const exampleSentences = (state: state = [], action: ActionObject) => {
  switch(action.type) {
    case 'ADD_ALL_SENTENCES':
      return action.sentences;
    default:
      return state;
  }
}

export default exampleSentences;
