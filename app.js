// app.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// API routes
app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

app.post("/subtract", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a - b });
});

app.post("/multiply", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a * b });
});

app.post("/divide", (req, res) => {
  const { a, b } = req.body;
  if (b === 0) {
    return res.status(400).json({ error: "Division by zero is not allowed" });
  }
  res.json({ result: a / b });
});

// Start the server
app.listen(port, () => {
  console.log(`Calculator API listening at http://localhost:${port}`);
});
