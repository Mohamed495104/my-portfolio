import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Contact from "./models/Contact.js";

dotenv.config();
const app = express();

//  Configure CORS
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:5173"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

//  Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Contact Route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, msg: "All fields required" });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({ success: true, msg: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact API Error:", error);
    res.status(500).json({ success: false, msg: "Error sending message" });
  }
});

// Root Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend is running!");
});

//  Dynamic Port for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
