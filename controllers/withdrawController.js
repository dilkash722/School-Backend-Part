// controllers/withdrawController.js
import Withdraw from "../models/withdrawModel.js";

export const createWithdraw = async (req, res) => {
  try {
    const newWithdraw = new Withdraw(req.body);
    await newWithdraw.save();
    res.status(201).json({ message: "Withdraw request submitted!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
