import { ADD_CUSTOMER_DETAILS_FAILURE, ADD_CUSTOMER_DETAILS_REQUEST, ADD_CUSTOMER_DETAILS_SUCCESS, DELETE_CUSTOMER_DETAILS_FAILURE, DELETE_CUSTOMER_DETAILS_REQUEST, DELETE_CUSTOMER_DETAILS_SUCCESS, EDIT_CUSTOMER_DATA_FAILURE, EDIT_CUSTOMER_DATA_REQUEST, EDIT_CUSTOMER_DATA_SUCCESS, GET_ALL_CUSTOMER_FAILURE, GET_ALL_CUSTOMER_REQUEST, GET_ALL_CUSTOMER_SUCCESS } from "../actions/type";




export const addItemReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CUSTOMER_DETAILS_REQUEST:
      return { loading: true };
    case ADD_CUSTOMER_DETAILS_SUCCESS:
      return { loading: false, success: true, addData: action.payload };
    case ADD_CUSTOMER_DETAILS_FAILURE:
      return { loading: false, error: action.payload.error };
    default:
      return state;
  }
};


export const deleteCustomerReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CUSTOMER_DETAILS_REQUEST:
      return { loading: true };
    case DELETE_CUSTOMER_DETAILS_SUCCESS:
      return { loading: false, success: true, deleteData: action.payload };
    case DELETE_CUSTOMER_DETAILS_FAILURE:
      return { loading: false, error: action.payload.error };
    default:
      return state;
  }
};

export const getAllCustomersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_CUSTOMER_REQUEST:
      return { loading: true };
    case GET_ALL_CUSTOMER_SUCCESS:
      return { loading: false, success: true, customersData: action.payload };
    case GET_ALL_CUSTOMER_FAILURE:
      return { loading: false, error: action.payload.error };
    default:
      return state;
  }
};

export const EDITCustomerReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_CUSTOMER_DATA_REQUEST:
      return { loading: true };
    case EDIT_CUSTOMER_DATA_SUCCESS:
      return { loading: false, success: true, editCustomerData: action.payload };
    case EDIT_CUSTOMER_DATA_FAILURE:
      return { loading: false, error: action.payload.error };
    default:
      return state;
  }
};