import { ActionObject, Brainstorm } from 'interfaces';

type state = Brainstorm[] | [ ];

const allBrainstorms = (state: state = [ ], action: ActionObject) => {
  switch(action.type) {
    case 'ADD_ALL_BRAINSTORMS':
      return action.brainstorms;
    case 'ADD_BRAINSTORM':
      return [...state, action.brainstorm];
    case 'DELETE_BRAINSTORM':
      return state.filter(bs => bs.id !== action.id);
    default:
      return state;
  }
}

export default allBrainstorms;
