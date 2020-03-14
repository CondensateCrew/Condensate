import { ActionObject, Category } from 'interfaces';

type state = Category[ ] | [ ];

const categories = (state: state = [ ], action: ActionObject) => {
  switch(action.type) {
    case 'ADD_ALL_CATEGORIES':
      return action.categories;
    case 'ADD_CATEGORY':
      return [...state, action.category];
    case 'CLEAN_STORE':
      return [ ];
    default:
      return state;
  }
}

export default categories;
