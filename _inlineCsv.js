const fs = require("fs");

let src = fs.readFileSync("data/_index.js", { encoding: "utf-8" });
const data = fs.readFileSync("data/pokemon.csv", { encoding: "utf-8" });
src = src.replace(
  'const data = fs.readFileSync("data/pokemon.csv", { encoding: "utf-8" });',
  "const data = `" + data + "`;"
);
fs.writeFileSync("data/index.js", src, { encoding: "utf-8" });
