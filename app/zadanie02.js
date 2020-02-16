const fs = require("fs");

fs.readdir("./data/zadanie02", (err, data) => {
  if (err === null) {
    data.forEach(el => {
      fs.readFile("./data/zadanie02/" + el, "utf8", (err, data) => {
        if (err === null) {
          console.log(data);
        } else {
          console.log("readFile Error!");
        }
      });
    });
  } else {
    console.log("readdir Error!", err);
  }
});
