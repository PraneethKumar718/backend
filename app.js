// app.js
const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from API 🚀" });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "API is healthy 🚀" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000!");
});
