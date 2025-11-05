const fs = require("fs");
const N = fs
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

const dp = Array.from({ length: 1000000 }, () => 0);
dp[0] = 1;
dp[1] = 2;
for (let i = 2; i <= 1000000; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[Number(N - 1)]);
