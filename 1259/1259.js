// 펠린드롬수

const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const testCase = input.length - 1;
input = input.map(value => value.trim());

for (let i = 0; i < testCase; i++) {
    const arr = Array.from(input[i]);
    const revArr = Array.from(input[i]).reverse();
    const length = arr.length;
    let count = 0;

    for (let j = 0; j < length; j++) {
        if (arr[j] === revArr[j]) count++;
    }

    if (count == length) console.log('yes');
    else console.log('no');
}