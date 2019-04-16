import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';
import ProductDetailReducer from './ProductDetailReducer';
import BasketReducer from './BasketReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  productList: ProductReducer,
  productDetail: ProductDetailReducer,
  basketInfo: BasketReducer,
  user: UserReducer
});
