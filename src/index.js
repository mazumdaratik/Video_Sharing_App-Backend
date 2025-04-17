import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express"; // <-- Import express

const app = express(); // <-- Create app instance

dotenv.config({
    path: './env'
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed!", err);
    });
