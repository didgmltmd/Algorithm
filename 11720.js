const fs = require("fs");
const [N, [...L]] = fs
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

console.log(L.reduce((a, b) => Number(a) + Number(b), 0));
