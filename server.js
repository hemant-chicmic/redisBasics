import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import redis from "redis";

dotenv.config();
const PORT = process.env.PORT || 3000;
const client = redis.createClient({
    host : "localhost",
    port : "6379" ,
    url: "redis://localhost:6379",
});

client.connect().catch((err) => console.error("Error connecting to Redis:", err));

const app = express() ;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello, This is Redis basics and husky " });
});

app.post("/catchedRoute", async(req, res) => {
    const { key } = req.body;
    try {
        const cachedData = await client.get(key);
        if (cachedData) {
            return res.status(200).json({ data: cachedData });
        }
        const data = "Hello fetched data from the db";
        await client.set(key, data);
        await client.expire(key, 3600);
        return res.status(200).json({ data });
    }
    catch (err) {
        console.error("Error handling request:", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

process.on("SIGINT", async() => {
    await client.quit();
    process.exit(0);
});

