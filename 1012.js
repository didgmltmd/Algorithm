//https://www.acmicpc.net/problem/1012

const fs = require("fs");
const [t, ...input] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.replace("\r", ""));

let cases = [...input];

for (let i = 0; i < Number(t); i++) {
    const [width, height, cabbageNum] = cases[0]
    .split(" ")
    .map((v) => Number(v));

  const cabbageArr = Array.from(Array(height), () => Array(width).fill(0));
  let result = 0;


  for (let j = 1; j <= cabbageNum; j++) {
    const [x, y] = cases[j].split(" ").map(Number);
    cabbageArr[y][x] = 1; 
  }

  const BFS = (r, c) => {
    const queue = [[r, c]];
    cabbageArr[r][c] = 0; 
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    while (queue.length) {
      const [cr, cc] = queue.shift();

      for (let d = 0; d < 4; d++) {
        const nr = cr + dr[d];
        const nc = cc + dc[d];

        if (
          nr >= 0 &&
          nr < height &&
          nc >= 0 &&
          nc < width &&
          cabbageArr[nr][nc] === 1
        ) {
          cabbageArr[nr][nc] = 0; 
          queue.push([nr, nc]);
        }
      }
    }
  };


  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      if (cabbageArr[r][c] === 1) {
        BFS(r, c);
        result++;
      }
    }
  }

  console.log(result);
  cases.splice(0, cabbageNum + 1);
}
