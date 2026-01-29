import express from "express";
import path from "path"
import { ENV } from "./lib/env.js";

const app = express();

const __dirname = path.resolve()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
    res.status(200).json({message: "server is running!"})
})


// make our app ready for deployment

if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
    });
}
app.listen(ENV.PORT, () => {
    console.log(`http://localhost:${ENV.PORT}`);
})