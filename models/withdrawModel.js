import mongoose from "mongoose";

const withdrawSchema = new mongoose.Schema({
  fullName: String,
  mobile: String,
  registrationNumber: String,
  course: String,
});

const Withdraw = mongoose.model("Withdraw", withdrawSchema);
export default Withdraw;
