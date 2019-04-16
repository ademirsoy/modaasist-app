import { Alert } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { get } from '../utils/api-client';
import {
  ADD_TO_BASKET
} from './types';

export const addToBasket = (basketItem) => {
  return {
    type: ADD_TO_BASKET,
    payload: basketItem
  };
};
