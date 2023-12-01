import mongoose from "mongoose";
import bcrypt from "bcrypt";

const customerSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },

  country: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  languages: {
    type: String,
  },
  date: {
    type: String,
    default: new Date().toLocaleString(),
  },
  active: {
    type: Boolean,
    default: false,
  },
});

// customerSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     const hashedPassword = await bcrypt.hash(this.password, 10);
//     this.password = hashedPassword;
//   }
//   next();
// });

const CustomerData = mongoose.model("customer", customerSchema);

export default CustomerData;
