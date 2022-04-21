const fs = require("fs");
const path = require("path");

const folder = process.argv[2];
const extention = "." + process.argv[3];

fs.readdir(folder, function (err, list) {
  if (err) return console.error(err);
  list.forEach(function (file) {
    if (path.extname(file) === extention) {
      console.log(file);
    }
  });
});

