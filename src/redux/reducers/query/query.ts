import { ActionObject } from 'interfaces';

type state = string | '';

const query = (state: state = '', action: ActionObject) => {
  switch(action.type) {
    case 'ADD_QUERY':
      return action.query;
    case 'REMOVE_QUERY':
      return '';
    case 'CLEAN_STORE':
      return '';
    default:
      return state;
  }
}

export default query;
