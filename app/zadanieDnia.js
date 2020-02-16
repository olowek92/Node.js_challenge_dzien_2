const fs = require("fs");

process.argv.forEach((val, index) => {
  if (index > 1) {
    fs.readFile(val, "utf8", (err, data) => {
      if (err === null) {
        let changingLetters = data
          .split("")
          .map((letter, index) =>
            index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
          )
          .join("");
        console.log(changingLetters);
      } else {
        console.log("Error: ", err);
      }
    });
  }
});
