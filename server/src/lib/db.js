import mongoose from "mongoose";
import { ENV } from "./env.js"


export const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Mongoose connected to DB");
        })
        if(!ENV.DB_URL) {
            throw new Error("DB_URL is not defined in environment variables");
        }
        const conn = await mongoose.connect(ENV.DB_URL);

    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
}