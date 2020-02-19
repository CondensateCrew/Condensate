import { ActionObject } from 'interfaces';

type state = string[ ] | [ ];

const chosenWords = (state: state = [ ], action: ActionObject) => {
  switch(action.type) {
    case 'ADD_SELECTED_WORD':
      return [...state, action.word];
    default:
      return state;
  }
}

export default chosenWords;
