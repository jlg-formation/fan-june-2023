const express = require("express");

const app = express.Router();

app.use("/date", (req, res) => {
  res.json({ date: new Date() });
});

module.exports = app;
