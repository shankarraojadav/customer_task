import { configureStore } from "@reduxjs/toolkit";
import { addItemReducer, deleteCustomerReducer, getAllCustomersReducer, EDITCustomerReducer } from "./reducers";

const store = configureStore({
  reducer: {
    addCustomers: addItemReducer,
    deleteCustumer: deleteCustomerReducer,
    allCustomers: getAllCustomersReducer,
    editCustomer: EDITCustomerReducer
  },
});


export default store;