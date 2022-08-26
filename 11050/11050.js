// 이항계수1

const fs = require('fs');
const filePath = './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split(' ');

let [N, K] = input.map(value => +value);

console.log(factorial(N) / (factorial(K) * factorial(N - K)));


function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

