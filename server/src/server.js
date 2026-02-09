import express from "express";
import path from "path"
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import { serve } from "inngest/express";
import { inngest } from "./lib/inngest.js";

const app = express();

const __dirname = path.resolve();
// const __dirname = path.resolve(fileURLToPath(import.meta.url));

// middleware
app.use(express.json());

//credentials:true => meaning server allows a browser to include cookies on request
app.use(cors({origin:ENV.CLIENT_URL, credentials:true}))
app.use(express.urlencoded({ extended: true }));

app.use("/api/inngest", serve({client :inngest, functions : []}))

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