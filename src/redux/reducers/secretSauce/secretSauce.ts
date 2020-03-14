import { ActionObject } from 'interfaces';

type state = string[] | [ ];

const secretSauce = (state: state = [ ], action: ActionObject) => {
  switch(action.type) {
    case 'ADD_SECRET_SAUCE':
      return action.secretSauce;
    case 'CLEAN_STORE':
      return [ ];
    default:
      return state;
  }
}

export default secretSauce;
