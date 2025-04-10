// controllers/admissionController.js
import Admission from "../models/admissionModel.js";

export const createAdmission = async (req, res) => {
  try {
    const newAdmission = new Admission(req.body);
    await newAdmission.save();
    res.status(201).json({ message: "Admission submitted!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
