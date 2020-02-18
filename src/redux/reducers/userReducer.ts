import { ActionObject } from '../../interfaces';

const userReducer = (state:object = {}, action:ActionObject) => {
  switch(action.type) {
    case 'ADD_USER':
      return {
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName
      }
    case 'LOG_OUT_USER':
      return {}
    default: 
      return state
  }
}

export default userReducer;