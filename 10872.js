const fs = require("fs");
const N = fs
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

let result = 1;
for (let i = 1; i <= Number(N); i++) {
  result *= i;
}
console.log(result);
