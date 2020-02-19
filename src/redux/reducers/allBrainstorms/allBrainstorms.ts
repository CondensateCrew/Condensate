import { ActionObject, Brainstorm } from 'interfaces';

type state = Brainstorm[] | [ ];

const allBrainstorms = (state: state = [ ], action: ActionObject) => {
  switch(action.type) {
    case 'ADD_BRAINSTORMS':
      return action.brainstorms;
    default:
      return state;
  }
}

export default allBrainstorms;
