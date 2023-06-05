console.log("About to start a web server...");

const express = require("express");

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("req: ", req.url, req.method);
  next();
});

app.use(express.static("."));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
