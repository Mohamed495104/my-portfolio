import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Contact from "./models/Contact.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// connect MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// contact route
app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const contact = new Contact({ name, email, message });
        await contact.save();
        res.status(201).json({ success: true, msg: "Message sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: "Error sending message" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
