import { combineReducers } from 'redux';
import user from './user/user'
import allBrainstorms from './allBrainstorms/allBrainstorms'
import categories from './categories/categories'
import actions from './actions/actions'
import randomWordCollections from './randomWordCollections/randomWordCollections'
import exampleSentences from './exampleSentences/exampleSentences'
import secretSauce from './secretSauce/secretSauce'
import currentBrainstorm from './currentBrainstorm/currentBrainstorm'
import chosenWords from './chosenWords/chosenWords'
import insights from './insights/insights'
import query from './query/query'
import filter from './filter/filter'
import timeEnded from './timeEnded/timeEnded'
import instructionsEnded from './instructionsEnded/instructionsEnded'

const rootReducer = combineReducers({
  user,
  allBrainstorms,
  categories,
  actions,
  randomWordCollections,
  exampleSentences,
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
