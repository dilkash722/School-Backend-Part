// controllers/registrationController.js
import Registration from "../models/registrationModel.js";

export const createRegistration = async (req, res) => {
  try {
    const newRegistration = new Registration(req.body);
    await newRegistration.save();
    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
