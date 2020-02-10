import { combineReducers } from 'redux';

import app from './app';
import communication from './communication';
import users from './users';

const appReducer = combineReducers({
  app,
  users,
  communication,
});

export default function (state, action = {}) {
  let newState = state;
  if (action.type === 'USER_LOGOUT') {
    newState = undefined;
  }
  return appReducer(newState, action);
}
