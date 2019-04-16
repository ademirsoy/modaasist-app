import {
  NAVIGATE_TO_PAGE
} from '../actions/types';

const INITIAL_STATE = {
  currentPage: 'productList'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAVIGATE_TO_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
