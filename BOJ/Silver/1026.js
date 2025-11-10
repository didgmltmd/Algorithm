const fs = require("fs");

const [N, ...S] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.replace("\r", ""));

let arrA = S[0].split(" ").map((item) => Number(item));
let arrB = S[1].split(" ").map((item) => Number(item));

let result = 0;

for (let i = 0; i < Number(N); i++) {
  let maxA = Math.max(...arrA);
  let minB = Math.min(...arrB);
  arrA.splice(arrA.indexOf(maxA), 1);
  arrB.splice(arrB.indexOf(minB), 1);

  result += maxA * minB;
}

console.log(result);
