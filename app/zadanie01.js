const fs = require("fs");

fs.readFile("./data/zadanie01/input.json", "utf8", (err, data) => {
  if (err === null) {
    let sum = 0;
    JSON.parse(data).forEach(e => {
      sum += e;
    });
    fs.writeFile("./data/zadanie01/sum.txt", sum, err => {
      if (err === null) {
        console.log("Hurra!");
      } else {
        console.log("Error: " + err);
      }
    });
  } else {
    console.log("Something went wrong :(");
  }
});
