const fs = require("fs");
const [N, ...L] = fs
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((data) => data.replace("\r", ""));

let [x, y] = N.split(" ").map((item) => Number(item));
let result = [];

function checkColor(startX, startY) {
  let colored = 0;
  let startColor = L[startX][startY];
  for (let i = startX; i <= startX + 7; i++) {
    for (let j = startY; j <= startY + 7; j++) {
      if (((i - startX + j - startY) % 2) % 2 == 0 && L[i][j] != startColor) {
        colored++;
      } else if (
        ((i - startX + j - startY) % 2) % 2 != 0 &&
        L[i][j] == startColor
      ) {
        colored++;
      }
    }
  }
  return Math.min(colored, 64 - colored);
}

for (let i = 0; i + 7 < x; i++) {
  for (let j = 0; j + 7 < y; j++) {
    result.push(checkColor(i, j));
  }
}
console.log(Math.min(...result));
