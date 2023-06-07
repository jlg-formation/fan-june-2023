const fs = require("fs");

try {
  const files = fs.readdirSync(".");
  console.log("files: ", files);
  const content = fs.readFileSync(files[0], "utf8");
  console.log("content: ", content);
  console.log("coucou");
} catch (err) {
  console.log("err: ", err);
}
