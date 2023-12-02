import axios from "axios";
import {
  ADD_CUSTOMER_DETAILS_FAILURE,
  ADD_CUSTOMER_DETAILS_REQUEST,
  ADD_CUSTOMER_DETAILS_SUCCESS,
  DELETE_CUSTOMER_DETAILS_FAILURE,
  DELETE_CUSTOMER_DETAILS_REQUEST,
  DELETE_CUSTOMER_DETAILS_SUCCESS,
  EDIT_CUSTOMER_DATA_FAILURE,
  EDIT_CUSTOMER_DATA_REQUEST,
  EDIT_CUSTOMER_DATA_SUCCESS,
  GET_ALL_CUSTOMER_FAILURE,
  GET_ALL_CUSTOMER_REQUEST,
  GET_ALL_CUSTOMER_SUCCESS,
} from "./type";

const url = "https://customer-xnhc.onrender.com" || " http://localhost:3000";

export const addCustomer = (data) => async (dispatch) => {
  try {
    console.log("dis", data)
    dispatch({ type: ADD_CUSTOMER_DETAILS_REQUEST });

    const response = await axios.post(`${url}/addcustomer`, data);

    dispatch({ type: ADD_CUSTOMER_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ADD_CUSTOMER_DETAILS_FAILURE,
      payload: error.response.data,
    });
  }
};


export const deleteCustomer = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CUSTOMER_DETAILS_REQUEST });

    const response = await axios.delete(`${url}/deletecustomer/${id}`);

    dispatch({ type: DELETE_CUSTOMER_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: DELETE_CUSTOMER_DETAILS_FAILURE,
      payload: error.response.data,
    });
  }
};

export const getAllCustomers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_CUSTOMER_REQUEST });

    const response = await axios.get(`${url}/getAllCustomers`);

    dispatch({ type: GET_ALL_CUSTOMER_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_ALL_CUSTOMER_FAILURE,
      payload: error.response.data,
    });
  }
};

export const editCustomerData = (id,data) => async (dispatch) => {
  try {
    console.log(id, data)
    dispatch({ type: EDIT_CUSTOMER_DATA_REQUEST });

    const response = await axios.put(`${url}/editCustomer/${id}`, data);

    dispatch({ type: EDIT_CUSTOMER_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: EDIT_CUSTOMER_DATA_FAILURE,
      payload: error.response.data,
    });
  }
};