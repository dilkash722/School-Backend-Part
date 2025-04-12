import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; // NOTE: add .js extension for ESM

import admissionRoutes from "./routes/admissionRoutes.js";
import registrationRoutes from "./routes/registrationRoutes.js";
import withdrawRoutes from "./routes/withdrawRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("Running Server...");
});

// Routes
app.use("/api/admission", admissionRoutes);
app.use("/api/registration", registrationRoutes);
app.use("/api/withdraw", withdrawRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
