const fs = require('fs');
const filePath = './input.txt';

let str = fs.readFileSync(filePath).toString().trim();

console.log(str.length);