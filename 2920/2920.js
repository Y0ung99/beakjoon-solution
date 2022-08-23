const fs = require('fs');
const filePath = './input.txt';

// 음계

let acount = 0;
let dcount = 0;
let input = fs.readFileSync(filePath).toString().trim().split(' ');

input = input.map(value => +value);

for (let i = 0; i < 7; i++) {
    if (input[i] < input[i + 1]) acount++;
    if (input[i] > input[i + 1]) dcount++;
}

if (acount && dcount) console.log('mixed')
else if (acount === 7) console.log('ascending')
else if (dcount === 7) console.log('descending');
