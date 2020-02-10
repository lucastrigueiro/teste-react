import {
  APP_LOADING_BEGIN,
  APP_LOADING_END,
  TOGGLE_COLLAPSED,
  CHANGE_HEADER_TITLE,
} from '../actiontypes/app';

const INITIAL_STATE = {
  loading: false,
  collapsed: false,
  headerTitle: '',
};

const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_LOADING_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case APP_LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case TOGGLE_COLLAPSED:
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    case CHANGE_HEADER_TITLE:
      return {
        ...state,
        headerTitle: action.headerTitle,
      };
    default:
      return state;
  }
};

export default app;
