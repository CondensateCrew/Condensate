import { ActionObject } from 'interfaces';

const instructionsEnded = (state: boolean = false, action: ActionObject) => {
  switch(action.type) {
    case 'END_INSTRUCTIONS':
      return true;
    case 'REVERSE_INSTRUCTIONS':
      return false;
    default:
      return state;
  }
}

export default instructionsEnded;
