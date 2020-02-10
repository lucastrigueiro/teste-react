import { encrypty, decrypty } from './../utils/helpers';

export function removeUserFromStorage() {
  localStorage.removeItem('token');
  localStorage.removeItem('user_data');
  localStorage.removeItem('user_id');
  localStorage.removeItem('user_role');
}

export function getAccessToken() {
  return decrypty(localStorage.getItem('token'));
}

export function getUserId() {
  return decrypty(localStorage.getItem('user_id'));
}

export function getUserRole() {
  return decrypty(localStorage.getItem('user_role'));
}

export function checkUserIsAuth() {
  const token = getAccessToken();
  return !!token;
}

export function setUserInfoOnLocalStorage(data) {
  localStorage.setItem('user_data', encrypty(JSON.stringify(data)));
}

export function getUserInfoOnLocalStorage() {
  return JSON.parse(decrypty(localStorage.getItem('user_data')));
}
