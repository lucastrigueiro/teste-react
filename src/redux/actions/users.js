import { userAuthenticate } from '../../dataSource/requests';
import { startLoading, finishLoading } from './communication';
import { setUserOnStorage, removeUserFromStorage } from '../../utils/users';
import { AUTH_URL } from '../../utils/constants';

export const USER_LOGOUT = 'USER_LOGOUT';
export const SET_USER_NAME = 'SET_USER_NAME';

export const setUserName = username => async (dispatch) => {
  dispatch({
    type: SET_USER_NAME,
    payload: {
      username,
    },
  });
};

export function authenticate(data) {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await userAuthenticate({ url: AUTH_URL, params: data });
      if (!response.error) {
        setUserOnStorage(response);
        const { me } = response;
        dispatch(setUserName(response.entities[me].name));
        dispatch(finishLoading());
        return response;
      }
      dispatch(finishLoading());
      return response;
    } catch (exception) {
      dispatch(finishLoading());
      return false;
    }
  };
}

export const userLogout = () => async (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
};

export function logout() {
  return (dispatch) => {
    try {
      dispatch(startLoading());
      removeUserFromStorage();
      dispatch(userLogout());
      dispatch(finishLoading());
    } catch (exception) {
      dispatch(finishLoading());
    }
  };
}
