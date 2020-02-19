import { ActionObject } from 'interfaces';

const instructionsEnded = (state: boolean = false, action: ActionObject) => {
  switch(action.type) {
    case 'CHANGE_IS_ENDED':
      return action.isEnded;
    default:
      return state;
  }
}

export default instructionsEnded;
