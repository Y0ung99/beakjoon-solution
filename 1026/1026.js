// 보물
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
input = input.split('\n');

let a = arrayStringtoInt(1);
let b = arrayStringtoInt(2);

a.sort((a, b) => a - b);
b.sort((a, b) => b - a);
const newArr = a.map((value, index) => value * b[index]);

console.log(newArr.reduce((a, b) => a + b));

function arrayStringtoInt(i) {
    return input[i].split(' ').map(char => +char);
}