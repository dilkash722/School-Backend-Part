import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  registrationNumber: String,
  course: String,
  fee: Number,
});

const Registration = mongoose.model("Registration", registrationSchema);
export default Registration;
