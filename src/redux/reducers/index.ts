import { combineReducers } from 'redux';
import user from '../reducers/user/user';
import allBrainstorms from '../reducers/allBrainstorms/allBrainstorms';
import categories from '../reducers/categories/categories';
import actions from '../reducers/actions/actions';
import randomWordCollections from '../reducers/randomWordCollections/randomWordCollections';
import questionTemplates from '../reducers/questionTemplates/questionTemplates';
import secretSauce from '../reducers/secretSauce/secretSauce';
import currentBrainstorm from '../reducers/currentBrainstorm/currentBrainstorm';
import chosenWords from '../reducers/chosenWords/chosenWords';
import insights from '../reducers/insights/insights';
import query from '../reducers/query/query';
import filter from '../reducers/filter/filter';
import timeEnded from '../reducers/timeEnded/timeEnded';
import instructionsEnded from '../reducers/instructionsEnded/instructionsEnded';

const rootReducer = combineReducers({
  user,
  allBrainstorms,
  categories,
  actions,
  randomWordCollections,
  questionTemplates,
  secretSauce,
  currentBrainstorm,
  chosenWords,
  insights,
  query,
  filter,
  timeEnded,
  instructionsEnded
});

export default rootReducer;
