import express from "express";
import {
  addCustomerDetails,
  deleteCustomer,
  editCustomer,
  getAllCustomers,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/addCustomer", addCustomerDetails);
router.get("/getAllCustomers", getAllCustomers);
router.delete("/deletecustomer/:id", deleteCustomer);
router.put("/edtCustomer", editCustomer)

export default router;
