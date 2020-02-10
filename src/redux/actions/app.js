import {
  APP_LOADING_BEGIN,
  APP_LOADING_END,
  TOGGLE_COLLAPSED,
  CHANGE_HEADER_TITLE,
} from '../actiontypes/app';

export const beginLoadingData = () => async (dispatch) => {
  dispatch({ type: APP_LOADING_BEGIN });
};

export const endLoadingData = () => async (dispatch) => {
  dispatch({ type: APP_LOADING_END });
};

export const toggleMenuCollapsed = () => async (dispatch) => {
  dispatch({ type: TOGGLE_COLLAPSED });
};

export const changeHeaderTitle = headerTitle => async (dispatch) => {
  dispatch({ type: CHANGE_HEADER_TITLE, headerTitle });
};
