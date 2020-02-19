import { ActionObject } from 'interfaces';

type state = string | '';

const filter = (state: state = '', action: ActionObject) => {
  switch(action.type) {
    case 'ADD_FILTER':
      return action.filter;
    case 'REMOVE_FILTER':
      return '';
    default:
      return state;
  }
}

export default filter;
