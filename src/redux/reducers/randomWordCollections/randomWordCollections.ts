import { ActionObject, WordSample } from 'interfaces';

type state = WordSample[] | [ ];

const randomWordCollections = (state: state = [ ], action: ActionObject) => {
  switch(action.type) {
    case 'ADD_ALL_COLLECTIONS':
      return action.collections;
    default:
      return state;
  }
}

export default randomWordCollections;
