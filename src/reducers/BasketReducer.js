import {
  ADD_TO_BASKET
} from '../actions/types';

const INITIAL_STATE = {
  basket: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      console.log(action.payload);  //check if already exists!
      return { ...state, basket: [...state.basket, action.payload] };
    default:
      return state;
  }
};
