// 직사각형에서 탈출

const fs = require('fs');
const filePath = './input.txt';

let [x, y, w, h] = fs.readFileSync(filePath).toString().trim().split(' ');

let way4 = [h-y, y, w-x, x];
console.log(Math.min(...way4));
