import { ActionObject, randomWordCollection } from 'interfaces';

type state = randomWordCollection[] | [ ];

const randomWordCollections = (state: state = [ ], action: ActionObject) => {
  switch(action.type) {
    case 'ADD_RANDOM_COLLECTIONS':
      return action.collections;
    default:
      return state;
  }
}

export default randomWordCollections;
