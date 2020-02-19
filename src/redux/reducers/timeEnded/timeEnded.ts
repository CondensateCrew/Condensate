import { ActionObject } from 'interfaces';

const timeEnded = (state: boolean = false, action: ActionObject) => {
  switch(action.type) {
    case 'CHANGE_IS_ENDED':
      return action.isEnded;
    default:
      return state;
  }
}

export default timeEnded;
