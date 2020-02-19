import { ActionObject, Category } from 'interfaces';

type state = Category[ ] | [ ];

const categories = (state: state = [ ], action: ActionObject) => {
  switch(action.type) {
    case 'ADD_CATEGORIES':
      return action.categories;
    default:
      return state;
  }
}

export default categories;
