const fs = require("fs");
const [N, L] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.replace("\r", ""));

let [xTop, xBottom] = N.split(" ").map((v) => Number(v));
let [yTop, yBottom] = L.split(" ").map((v) => Number(v));

function gcd(a, b) {
  while (b !== 0) [a, b] = [b, a % b];
  return Math.abs(a);
}

const gDen = gcd(xBottom, yBottom);
const lcm = (xBottom / gDen) * yBottom;
const top = xTop * (lcm / xBottom) + yTop * (lcm / yBottom);

const g = gcd(top, lcm);
console.log(top / g, lcm / g);
