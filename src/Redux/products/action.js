import Axios from "axios";
import * as types from "./actionTypes";

const fetchDataRequest = (payload, page) => {
  return {
    type: types.FETCH_DATA_REQUEST,
    payload: payload,
    page: page,
  };
};

const fetchDataSuccess = (payload, page) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload: payload,
    page: page,
  };
};

const fetchDataFailure = (payload) => {
  return {
    type: types.FETCH_DATA_FAILIURE,
    payload: payload,
  };
};

const fetchData = (payload, page) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());

    Axios.get("/products", {
      params: {
        ...payload,
        _page: page,
        // _limit : 6,
      },
    })
      .then((r) => dispatch(fetchDataSuccess(r.data)))
      .catch((e) => dispatch(fetchDataFailure(e.data)));
  };
};

const getSingleProductRequest = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_REQUEST,
    payload: payload,
  };
};
const getSingleProductSuccess = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_SUCCESS,
    payload: payload,
  };
};

const getSingleProductFailure = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_FAILURE,
    payload: payload,
  };
};

const getSingleProduct = (id) => (dispatch) => {
  dispatch(getSingleProductRequest());

  Axios.get(`/products/${id}`)
    .then((r) => dispatch(getSingleProductSuccess(r.data)))
    .catch((e) => dispatch(getSingleProductFailure(e.data)));
};

export { fetchData, getSingleProduct };
