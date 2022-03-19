import { JobModel } from "./schema";
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
    const jobs = await JobModel.find();
    return res.send(jobs)
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });