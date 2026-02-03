import express from "express";
import path from "path"
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
// import { fileURLToPath } from 'url';

const app = express();

const __dirname = path.resolve();
// const __dirname = path.resolve(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
    res.status(200).json({ message: "server is running!" })
})


// make our app ready for deployment

if (ENV.NODE_ENV === "development") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
    });
}

const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log(`http://localhost:${ENV.PORT}`);
        })
    } catch (error) {
        console.log("Error starting the server", error);
    }
}

startServer();