
import axios from 'axios';
import simpleStore from 'react-native-simple-store';
import { Actions } from 'react-native-router-flux';

const BASE_URL = 'https://api.modaasist.com/test/shop';

export const get = (url) => {
    return axios.get(`${BASE_URL}${url}`)
      .then((response) => {
        return response.data;
      });
};

export const getPrivate = (url) => {
  return simpleStore.get('Auth')
  .then(user => {
    if (user && user.token && user.userId) {
      return axios.get(`${BASE_URL}${url.replace('{vendorId}', user.userId)}`, getHeader(user.token))
        .then((response) => {
          return response.data;
        });
    } else {
      console.log('not loggedinnnn');
      Actions.auth();
    }
  });
};

export const post = (url, body) => {
  console.log('post request: ' + url);
  return simpleStore.get('Auth')
  .then(user => {
    if (user && user.token && user.userId) {
      return axios.post(`${BASE_URL}${url.replace('{vendorId}', user.userId)}`, body, getHeader(user.token))
        .then((response) => {
          console.log(response);
          return response.data;
        });
    } else {
      console.log('not loggedinnnn');
      Actions.auth();
    }
  });
};

export const put = (url, body) => {
  console.log('put request: ' + url);
  return simpleStore.get('Auth')
  .then(user => {
    if (user && user.token && user.userId) {
      return axios.put(`${BASE_URL}${url.replace('{vendorId}', user.userId)}`, body, getHeader(user.token))
        .then((response) => {
          console.log(response);
          return response.data;
        });
    } else {
      console.log('not loggedinnnn');
      Actions.auth();
    }
  });
};

const getHeader = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};
