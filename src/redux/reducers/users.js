import { SET_USER_NAME } from '../actions/users';


const INITIAL_STATE = {

};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        username: action.payload.username,
      };
    default:
      return state;
  }
};

export default users;
