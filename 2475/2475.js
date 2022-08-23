// 검증수

const fs = require('fs');
const filePath = './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split(' ');
let doubled = input.map(value => value*value);
let validationValue = doubled.reduce((prev, cur) => prev + cur) % 10;

console.log(validationValue);
