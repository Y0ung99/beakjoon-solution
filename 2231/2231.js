// 분해합

const fs = require('fs');
const filePath = './input.txt';

let input = fs.readFileSync(filePath).toString().trim();

let creator = 0;

for (let i = 1; i < input; i++) {
    let iToString = i.toString();
    let length = iToString.length;
    let posSum = 0;
    for (let j = 0; j < length; j++) {
        posSum += +iToString[j];
    }
    const tempCompare = i + posSum;
    if (input == tempCompare) {
        creator = i;
        break;
    }
}

console.log(creator);