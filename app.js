const fs = require("fs");
// fs.readFile("text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

const content = "i m happy to learned javascript";
fs.writeFile("text.txt", content, (err) => {
  if (err) {
    console.err;
    return;
  }
});
