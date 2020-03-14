import { ActionObject } from 'interfaces';

type state = string[] | [ ];

const actions = (state: state = [ ], action: ActionObject) => {
  switch(action.type) {
    case 'ADD_ALL_ACTIONS':
      return action.actions;
    case 'ADD_NEW_ACTION':
      return [...state, action.action];
    case 'CLEAN_STORE':
      return [ ];
    default:
      return state;
  }
}

export default actions;
