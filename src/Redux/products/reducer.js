import * as types from "./actionTypes";

const initState = {
  products: [],
  error: "",
  loading: false,
  currentProduct: {},
  page: 1,
};
export const productReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_DATA_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        products: payload,
        error: "",
        loading: false,
        page: 1,
      };
    case types.FETCH_DATA_FAILIURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case types.GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        currentProduct: payload,
        error: "",
        loading: false,
      };
    case types.GET_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
