// app.js
const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from API 🚀" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running");
});
