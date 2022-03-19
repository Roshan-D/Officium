import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGO_URL = String(process.env.MONGO_URL);
mongoose.connect(MONGO_URL).catch((err) => {
  throw err;
});

interface Job {
    company: String;
    role: String;
    description: String;
}

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
    },
    role: {
        type: String,
    },
    description: {
        type: String,
    }
})

export const JobModel = mongoose.model<Job>("Job", JobSchema)