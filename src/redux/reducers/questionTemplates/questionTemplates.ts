import { ActionObject } from 'interfaces';

type state = string[] | [];

const questionTemplates = (state: state = [], action: ActionObject) => {
  switch(action.type) {
    case 'ADD_TEMPLATES':
      return action.templates;
    default:
      return state;
  }
}

export default questionTemplates;
