import mongoose from "mongoose";

const MONGO_URL = "mongodb://localhost/Officium";
mongoose.connect(MONGO_URL).catch((err) => {
  throw err;
});

export interface Job {
    company: String;
    role: String;
    description: String;
}

export const JobSchema = new mongoose.Schema({
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

export const JobModel = mongoose.model<Job>("Job", JobSchema);