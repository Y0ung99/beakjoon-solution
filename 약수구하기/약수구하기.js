const fs = require('fs');
const filePath = './input.txt';
//const filePath = '/dev/stdin';

let [number, pos] = fs.readFileSync(filePath).toString().trim().split(' ');
let count = 0;
let result = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        count++;
    }
    if (count == pos) {
        result = i;
        break;
    }
}

if (result) {
    console.log(result);
} else {
    console.log(0);
}