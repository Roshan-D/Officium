import { JobModel } from "./schema";
import express from "express";

const PORT = 3001;

const app = express();

app.route("/").get(async (req, res) => {
    const jobs = await JobModel.find();
    return res.send(jobs)
  });

app.route("/").post( async (req, res) => {
    /** post request should scrape the req.url
     * and obtain the relevant info company, role,
     * and description. This info should then be used
     * to create a new entry in the JobModel
    */
    return res.send()
  });
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });