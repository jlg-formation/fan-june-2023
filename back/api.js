const express = require("express");

const app = express.Router();

const articles = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 345 },
  { id: "a2", name: "Pelle", price: 3.45, qty: 12 },
];

app.use("/date", (req, res) => {
  res.json({ date: new Date() });
});

app.use("/articles", (req, res) => {
  res.json(articles);
});

module.exports = app;
