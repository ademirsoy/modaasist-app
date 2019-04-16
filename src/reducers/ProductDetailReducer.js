import {
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FULL_FETCH_SUCCESS,
  PRODUCT_ATTRIBUTE_SELECT
} from '../actions/types';

const INITIAL_STATE = {
  product: { sizes: [], colors: [], heights: [], shoeSizes: [] },
  size: null,
  color: null,
  height: null,
  shoeSize: null,
  selectedVariation: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_FETCH_SUCCESS:
      return {
         ...INITIAL_STATE,
        product: action.payload
      };
    case PRODUCT_FULL_FETCH_SUCCESS:
      return { ...INITIAL_STATE, product: action.payload };
    case PRODUCT_ATTRIBUTE_SELECT:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
        selectedVariation: selectVariation(state, action.payload.prop, action.payload.value)
       };
    default:
      return state;
  }
};

const selectVariation = (state, attr, value) => {
  // console.log('state: ', state);
  // console.log('attr: ', attr);
  // console.log('value: ', value);
  const found = state.product.variations.filter(v => (equals(v[attr], value) || attr === 'height') && filterVariationAttr(state, attr, v));
  if (found.length > 0) {
    return found[0];
  }
  const superVariation = state.product.variations.filter(v => !v.size && !v.color && !v.height && !v.shoeSize);
  if (superVariation.length > 0) {
    return superVariation[0];
  }
  return {};
};

const filterVariationAttr = (state, attr, variation) => {
  const condition = (attr === 'size' || equals(state.size, variation.size))
  && (attr === 'color' || state.color == variation.color)
  && (attr === 'height' || (state.height == variation.height || !variation.height))
  && (attr === 'shoeSize' || state.shoeSize == variation.shoeSize);

  console.log('condition:', condition);
  return condition;
};

const equals = (string, value) => {
  if (!string || !value) {
    return false;
  }
  if (string.toLowerCase() == value.toLowerCase()) {
    return true;
  }
};

const mergeImageList = (coverImages, allImages) => {
  console.log('coverImage: ', coverImages);
  console.log('allImages: ', allImages);

  return [...coverImages, ...allImages.filter(i => i.position !== 0)];
};
