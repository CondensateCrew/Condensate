import { ActionObject } from 'interfaces';

type state = string[] | [ ];

const actions = (state: state = [ ], action: ActionObject) => {
  switch(action.type) {
    case 'ADD_ACTIONS':
      return action.actions;
    default:
      return state;
  }
}

export default actions;
