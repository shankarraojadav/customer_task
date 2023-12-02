import CustomerData from "../models/customerSchema.js";

export const addCustomerDetails = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      country,
      state,
      city,
      languages,
      active,
    } = req.body;

    console.log(
      fullName,
      email,
      password,
      country,
      state,
      city,
      languages,
      active
    );

    const newCustomer = new CustomerData({
      fullName,
      email,
      password,
      country,
      state,
      city,
      languages,
      active,
    });

    const savedCustomer = await newCustomer.save();
    res.status(201).json({ status: true, savedCustomer });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: false, message: "error while adding new customer!" });
  }
};

export const getAllCustomers = async (req, res) => {
  try {
    const customers = await CustomerData.find();
    return res.status(200).json(customers);
  } catch (error) {
    res.status(400).json("error while getting customer lists.");
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCustomer = await CustomerData.deleteOne({ _id: id });

    if (!deletedCustomer) {
      return res
        .status(404)
        .json({ status: false, message: "Customer not found" });
    }

    return res.json({ status: true, message: "Customer deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: false, message: "Error while deleting customer" });
  }
};

export const editCustomer = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      country,
      state,
      city,
      languages,
      active,
    } = req.body;

    const { id } = req.params
  

    const updatedCustomer = await CustomerData.findByIdAndUpdate(
      id,
      {
        fullName,
        email,
        password,
        country,
        state,
        city,
        languages,
        active,
      },
      { new: true }
    );

    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    return res.status(200).json({status: true, updatedCustomer});
  } catch (error) {
    console.error("Error editing customer:", error);
    return res.status(500).json({ status:false, message: "Internal server error" });
  }
};
