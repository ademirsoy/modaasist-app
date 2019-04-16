import {
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_START,
  PRODUCTS_REFRESH_START
} from '../actions/types';

const INITIAL_STATE = {
  products: [],
  loading: false,
  refreshing: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_SUCCESS:
      return { ...state, products: action.payload, loading: false, refreshing: false };
    case PRODUCTS_FETCH_START:
      return { ...state, loading: true };
    case PRODUCTS_REFRESH_START:
      return { ...state, refreshing: true };
    default:
      return state;
  }
};
