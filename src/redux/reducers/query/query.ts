import { ActionObject } from 'interfaces';

type state = string | '';

const query = (state: state = '', action: ActionObject) => {
  switch(action.type) {
    case 'ADD_QUERY':
      return action.query;
    default:
      return state;
  }
}

export default query;
