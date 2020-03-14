import { ActionObject } from 'interfaces';

const userReducer = (state:object = {}, action:ActionObject) => {
  switch(action.type) {
    case 'ADD_USER':
      return {
        id: action.user.id,
        firstName: action.user.firstName,
        lastName: action.user.lastName
      }
    case 'LOG_OUT_USER':
      return {}
    case 'CLEAN_STORE':
      return {};
    default:
      return state
  }
}

export default userReducer;
