const fs = require("fs");
fs.readFile("text.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

const content = "i m happy to learned javascript";
fs.writeFile("text.txt", content, (err) => {
  if (err) {
    console.err;
    return;
  }
});

fs.readFile("text.txt", "utf-8", (err, data) => {
  if (err) throw err;
  if (data.indexOf("mozilla") >= 0) {
    console.log(data);
  } else {
    console.log("file not existing");
  }
});

