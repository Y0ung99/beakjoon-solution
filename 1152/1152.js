// 단어의 개수

const fs = require('fs');
const filePath = './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split(' ');
let count = 0;

input.forEach(value => { if(value) count++ });
console.log(count);