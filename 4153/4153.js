// 직각삼각형

const fs = require('fs');
const filePath = './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const testCase = input.length - 1;

for (let i = 0; i < testCase; i++) {
    let triangle = input[i].split(' ');
    let [byeon1, byeon2, bit] = triangle.sort((a, b) => a - b);
    if ((byeon1 ** 2 + byeon2 ** 2) === (bit ** 2)) console.log('right');
    else console.log('wrong');
}