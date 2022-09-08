// 피보나치 수열2

const fs = require('fs');
const path = './input.txt';
let input = fs.readFileSync(path).toString().trim();
input = +input;

let dp = Array(input + 1).fill(0n);
dp[1] = 1n;

for (let i = 2; i <= input; i++) {
    dp[i] = dp[i-2] + dp[i-1];
}

console.log(dp[input].toString());

