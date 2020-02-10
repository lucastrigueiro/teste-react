import request from 'superagent';
import {
  AUTH_URL,
  API_URL,
  INVALID_ACCESS_TOKEN_ERROR_CODE,
  INVALID_REFRESH_TOKEN_ERROR_CODE,
} from '../utils/constants';
import {
  getAccessToken,
  getRefreshToken,
  setUserOnStorage,
  removeUserFromStorage,
} from '../utils/users';

export function onRefreshToken(callback, callbackParams) {
  const payload = {
    command: {
      refreshToken: `${getRefreshToken()}`,
    },
  };
  return new Promise(resolve => (
    request
      .post(API_URL + AUTH_URL)
      .send(payload)
      .set('Content-Type', 'application/json')
      .type('application/json')
      .end(async (error, response) => {
        if (response) {
          if (response.body.error
            && response.body.error.code === INVALID_REFRESH_TOKEN_ERROR_CODE) {
            removeUserFromStorage();
            window.location.href = '/login';
          } else {
            setUserOnStorage(response.body);
            const newResponse = await callback({ ...callbackParams });
            resolve(newResponse);
          }
        }
      })),
  );
}

export function get({ url }) {
  return new Promise(resolve => (
    request
      .get(API_URL + url)
      .set('Authorization', `Bearer ${getAccessToken()}`)
      .end(async (error, response) => {
        if (response) {
          if (response.body.error && response.body.error.code === INVALID_ACCESS_TOKEN_ERROR_CODE) {
            const refreshResponse = await onRefreshToken(get, { url });
            resolve(refreshResponse);
          } else {
            resolve(response.body);
          }
        }
      })),
  );
}

export function getWithoutToken({ url }) {
  return new Promise(resolve => (
    request
      .get(API_URL + url)
      .end(async (error, response) => {
        if (response) {
          if (response.body.error && response.body.error.code === INVALID_ACCESS_TOKEN_ERROR_CODE) {
            const refreshResponse = await onRefreshToken(getWithoutToken, { url });
            resolve(refreshResponse);
          } else {
            resolve(response.body);
          }
        }
      })),
  );
}

export function getById({ url, id }) {
  return new Promise(resolve => (
    request
      .get(API_URL + url + id)
      .set('Authorization', `Bearer ${getAccessToken()}`)
      .end(async (error, response) => {
        if (response) {
          if (response.body.error && response.body.error.code === INVALID_ACCESS_TOKEN_ERROR_CODE) {
            const refreshResponse = await onRefreshToken(getById, { url, id });
            resolve(refreshResponse);
          } else {
            resolve(response.body);
          }
        }
      })),
  );
}

export function post({ url, params }) {
  return new Promise(resolve => (
    request
      .post(API_URL + url)
      .send(params)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${getAccessToken()}`)
      .type('application/json')
      .end(async (error, response) => {
        if (response) {
          if (response.body.error && response.body.error.code === INVALID_ACCESS_TOKEN_ERROR_CODE) {
            const refreshResponse = await onRefreshToken(post, { url, params });
            resolve(refreshResponse);
          } else {
            resolve(response.body);
          }
        }
      })),
  );
}

export function put({ url, params }) {
  return new Promise(resolve => (
    request
      .put(API_URL + url)
      .send(params)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${getAccessToken()}`)
      .type('application/json')
      .end(async (error, response) => {
        if (response) {
          if (response.body.error && response.body.error.code === INVALID_ACCESS_TOKEN_ERROR_CODE) {
            const refreshResponse = await onRefreshToken(put, { url, params });
            resolve(refreshResponse);
          } else {
            resolve(response.body);
          }
        }
      })),
  );
}

export function patch({ url, params, id }) {
  return new Promise(resolve => (
    request
      .patch(API_URL + url + id)
      .send(params)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${getAccessToken()}`)
      .type('application/json')
      .end(async (error, response) => {
        if (response) {
          if (response.body.error && response.body.error.code === INVALID_ACCESS_TOKEN_ERROR_CODE) {
            const refreshResponse = await onRefreshToken(patch, { url, params, id });
            resolve(refreshResponse);
          } else {
            resolve(response.body);
          }
        }
      })),
  );
}

export function del({ url, params }) {
  return new Promise(resolve => (
    request
      .delete(API_URL + url)
      .send(params)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${getAccessToken()}`)
      .type('application/json')
      .end(async (error, response) => {
        if (response) {
          if (response.body.error && response.body.error.code === INVALID_ACCESS_TOKEN_ERROR_CODE) {
            const refreshResponse = await onRefreshToken(del, { url, params });
            resolve(refreshResponse);
          } else {
            resolve(response.body);
          }
        }
      })),
  );
}

export function userAuthenticate({ url, params }) {
  return new Promise(resolve => (
    request
      .post(API_URL + url)
      .type('application/json')
      .send(params)
      .end((error, response) => {
        if (response) {
          resolve(response.body);
        }
      })),
  );
}

export function userSignUp({ url, params }) {
  return new Promise((resolve, reject) => (
    request
      .post(API_URL + url)
      .send(params)
      .set('Content-Type', 'application/json')
      .type('application/json')
      .end((error, response) => {
        if (response) {
          resolve(response.body);
        } else {
          reject(error);
        }
      })),
  );
}
