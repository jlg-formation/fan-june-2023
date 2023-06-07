const express = require("express");
const crypto = require("crypto");

const app = express.Router();

const articles = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 345 },
  { id: "a2", name: "Pelle", price: 3.45, qty: 12 },
];

app.get("/date", (req, res) => {
  res.json({ date: new Date() });
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.use(express.json());

app.post("/articles", (req, res) => {
  const newArticle = req.body;
  const article = { ...newArticle, id: crypto.randomUUID() };
  articles.push(article);
  res.status(201).end();
});

module.exports = app;
