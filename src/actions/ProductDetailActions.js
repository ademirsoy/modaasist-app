import { Alert } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { get } from '../utils/api-client';
import {
  PRODUCT_ATTRIBUTE_SELECT
} from './types';

export const productAttrSelect = ({ prop, value }) => {
  return {
    type: PRODUCT_ATTRIBUTE_SELECT,
    payload: { prop, value }
  };
};
