import { ActionObject, Insight } from 'interfaces';

type state = Insight[] | [];

const insights = (state: state = [], action: ActionObject) => {
  switch(action.type) {
    case 'ADD_INSIGHT':
      return [...state, action.insight];
    case 'CLEAN_STORE':
      return [ ];
    case 'REMOVE_INSIGHTS':
      return [ ];
    default:
      return state;
  }
}

export default insights;
