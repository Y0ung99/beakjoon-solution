// 제곱수의 합

const fs = require('fs');
const path = './input.txt';
let input = fs.readFileSync(path).toString().trim()
input = +input;
let dp = Array(input + 1);

for (let i = 0; i <= input; i++) {
    dp[i] = i;
}   

for (let i = 2; i <= input; i++) {
    for (let j = 2; j*j <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i - j*j] + 1);
    }
}

console.log(dp[input]);
