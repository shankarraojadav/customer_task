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
router.put("/editCustomer/:id", editCustomer)




export default router;
