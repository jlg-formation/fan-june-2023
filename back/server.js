console.log("About to start a web server...");

const express = require("express");
const serveIndex = require("serve-index");
const api = require("./api");

const app = express();
const port = 3000;
const publicDir = "../front/dist";

app.use((req, res, next) => {
  console.log("req: ", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use("/api", api);

app.use(express.static(publicDir));
app.use(serveIndex(publicDir, { icons: true }));

app.get("/**", (req, res) => {
  res.sendFile("index.html", { root: publicDir });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
