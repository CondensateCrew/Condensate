import { ActionObject } from 'interfaces';

type state = string[ ] | [ ];

const chosenWords = (state: state = [ ], action: ActionObject) => {
  switch(action.type) {
    case 'ADD_WORD':
      return [...state, action.chosenWord];
    case 'ADD_FORGOTTEN_WORDS':
      let num = action.forgottenWords.length - state.length;
      return [...state, ...action.forgottenWords.slice(0, num)];
    case 'REMOVE_WORD':
      return state.filter(word => word !== action.chosenWord);
    case 'REMOVE_ALL_WORDS':
      return [];
    case 'CLEAN_STORE':
      return [ ];
    default:
      return state;
  }
}

export default chosenWords;
