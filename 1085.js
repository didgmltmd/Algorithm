const fs = require("fs");
const [...input] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ")
    .map((v) => v.replace("\r", ""));


let x = Number(input[0]);
let y = Number(input[1]);
let w = Number(input[2]);
let h = Number(input[3]);


let toLeft = x;
let toRight = w-x;
let toTop = h-y;
let toBottom = y;


let result = Math.min(toLeft,toRight,toTop,toBottom);



console.log(result);