import { Alert } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { get } from '../utils/api-client';
import {
  NAVIGATE_TO_PAGE
} from './types';

export const navigateToPage = (page) => {
  switch (page) {
    case 'productList':
      Actions.productList({ type: ActionConst.RESET });
      break;
    case 'basket':
      Actions.basket({ type: ActionConst.RESET });
      break;
    case 'profile':
      Actions.profile({ type: ActionConst.RESET });
      break;
    default:
      Actions.productList({ type: ActionConst.RESET });
  }
  return {
    type: NAVIGATE_TO_PAGE,
    payload: page
  };
};
