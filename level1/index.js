import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

console.log("PORT =", port);

app.get("/", (req, res) => {
    res.json({ message: "Hello from Docker" });
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Listening on ${port}`);
});

