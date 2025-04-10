import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  phone: String,
  course: String,
  tuitionFee: Number, // Or use Number if needed
});

const Admission = mongoose.model("Admission", admissionSchema);
export default Admission;
