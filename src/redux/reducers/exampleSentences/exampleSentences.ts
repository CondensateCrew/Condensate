import { ActionObject } from 'interfaces';

type state = string[] | [];

const exampleSentences = (state: state = [], action: ActionObject) => {
  switch(action.type) {
    case 'ADD_ALL_SENTENCES':
      return action.sentences;
    case 'CLEAN_STORE':
      return [ ];
    default:
      return state;
  }
}

export default exampleSentences;
