import AES from 'crypto-js/aes';
import enc from 'crypto-js/enc-utf8';
import base64arraybuffer from 'base64-arraybuffer';
import request from 'superagent';
import { message } from 'antd';
import { getAccessToken } from './../utils/users';
import { ENCRYPTION_KEY, SERVER_URL } from './../utils/constants';

const REST_SERVER = SERVER_URL.replace('/graphql', '');

export function encrypty(value) {
  return AES.encrypt(value, ENCRYPTION_KEY).toString();
}

export function decrypty(value) {
  if (value) {
    return AES.decrypt(value, ENCRYPTION_KEY).toString(enc);
  }
  return null;
}

const uploadImage = async (image) => {
  const blob = new Blob([image.originFileObj], { type: 'application/jpeg' });
  const response = await request
    .post(`${REST_SERVER}/1/uploadImageToS3`)
    .set('Authorization', getAccessToken())
    .type('application/jpeg')
    .send(blob);
  if (response.error) {
    message.error('Não foi possível enviar a imagem. Tente novamente');
    return null;
  }
  return response.text;
};

export const uploadImageAndGetLink = async (fileList) => {
  let imgUrl;
  if (fileList[0].url && fileList[0].url !== '') {
    imgUrl = fileList[0].url;
  } else {
    imgUrl = await uploadImage(fileList[0]);
  }
  return imgUrl;
};

export const convertBase64ToArrayBuffer = async (image) => {
  const type = image[0].type.replace('image/', '');
  const imageURL = image[0].thumbUrl
    .replace(`data:image/${type};base64,`, '')
    .replace('data:image/jpg;base64,', '')
    .replace('data:image/jpeg;base64,', '')
    .replace('data:image/png;base64,', '');
  const arrayBuffer = base64arraybuffer.decode(imageURL);
  const int8array = new Int8Array(arrayBuffer);
  return Object.values(int8array);
};
