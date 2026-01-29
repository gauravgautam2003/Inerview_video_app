import express from "express";
import { ENV } from "./lib/env.js";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).json({message: "server is running!"})
})

app.listen(ENV.PORT, () => {
    console.log(`http://localhost:${ENV.PORT}`);
})