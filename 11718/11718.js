// 그대로 출력하기

const fs = require('fs');
const filePath = './input.txt';

let [...input] = fs.readFileSync(filePath).toString().split('\n');
input.forEach(value => console.log(value));