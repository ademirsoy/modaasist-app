import { Alert } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { get } from '../utils/api-client';
import {
  PRODUCTS_FETCH_SUCCESS,
  PRODUCT_FULL_FETCH_SUCCESS,
  PRODUCTS_FETCH_START,
  PRODUCTS_REFRESH_START,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_CATEGORIES_FETCH_SUCCESS
} from './types';

export const productsFetch = (refresh) => {
  // const { currentUser } = firebase.auth();
  return (dispatch) => {
    dispatch({ type: refresh ? PRODUCTS_REFRESH_START : PRODUCTS_FETCH_START });
    get('/products/vendor-id/139')
      .then((response) => {
        // console.log('responseeeeee::::: ' + JSON.stringify(response));
        dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: response });
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response) {
          if (error.response.status === 401) {
            Actions.auth({ refreshToken: true, type: ActionConst.RESET });
          } else {
            Alert.alert('Bir Hata Oluştu! Hata Kodu: 10');
          }
        }
        dispatch({ type: null });
      });
  };
};

export const productFetchById = (id) => {
  return (dispatch) => {
    get(`/products/id/${id}`)
      .then((response) => {
        // console.log('responseeeeee::::: ' + JSON.stringify(response));
        dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: response });
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          Actions.auth({ refreshToken: true, type: ActionConst.RESET });
        } else {
          Alert.alert('Bir Hata Oluştu! Hata Kodu: 20');
        }
        dispatch({ type: null });
      });
  };
};

export const productFullFetchById = (id) => {
  return (dispatch) => {
    get(`/products/id/${id}`)
      .then((response) => {
        // console.log('responseeeeee::::: ' + JSON.stringify(response));
        dispatch({ type: PRODUCT_FULL_FETCH_SUCCESS, payload: response });
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          Actions.auth({ refreshToken: true, type: ActionConst.RESET });
        } else {
          Alert.alert('Bir Hata Oluştu! Hata Kodu: 30');
        }
        dispatch({ type: null });
      });
  };
};

export const productCategoriesFetch = () => {
  return (dispatch) => {
    get('/parameters/categories')
      .then((response) => {
        // console.log('responseeeeee::::: ' + JSON.stringify(response));
        dispatch({ type: PRODUCT_CATEGORIES_FETCH_SUCCESS, payload: response });
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          Actions.auth({ refreshToken: true, type: ActionConst.RESET });
        } else {
          Alert.alert('Bir Hata Oluştu! Hata Kodu: 50');
          Actions.productEdit({ type: ActionConst.BACK });
        }
        dispatch({ type: null });
      });
  };
};
