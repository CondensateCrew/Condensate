import { ActionObject, Brainstorm } from 'interfaces';

type state = Brainstorm | { };

const currentBrainstorm = (state: state = { }, action: ActionObject) => {
  switch(action.type) {
    case 'ADD_CURRENT_BRAINSTORM':
      return action.currentBrainstorm;
    case 'REMOVE_CURRENT_BRAINSTORM':
      return {};
    default:
      return state;
  }
}

export default currentBrainstorm;
