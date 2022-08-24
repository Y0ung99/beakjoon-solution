// 벌집

const fs = require('fs');
const filePath = './input.txt';

let input = fs.readFileSync(filePath).toString().trim();
let honeyComb = 1;
let add = 6;
let roomNum = 1;

while(input > honeyComb) {
    honeyComb += add;
    add += 6;
    roomNum++
}

console.log(roomNum);