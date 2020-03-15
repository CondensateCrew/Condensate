import { ActionObject } from 'interfaces';

const timeEnded = (state: boolean = false, action: ActionObject) => {
  switch(action.type) {
    case 'END_TIME':
      return true;
    case 'REVERSE_TIME':
      return false;
    case 'CLEAN_STORE':
      return false;
    default:
      return state;
  }
}

export default timeEnded;
