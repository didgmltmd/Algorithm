const fs = require("fs");
const [M, N] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));

function solution(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}

let isPrime = solution(N);
let prime = isPrime.map((v, i) => (v ? i : 0)).filter((e) => e && e >= M);
console.log(prime.join("\n"));
