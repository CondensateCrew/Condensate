import { ActionObject, Insight } from 'interfaces';

type state = Insight[] | [];

const insights = (state: state = [], action: ActionObject) => {
  switch(action.type) {
    case 'ADD_INSIGHT':
      return [...state, action.insight];
    default:
      return state;
  }
}

export default insights;
