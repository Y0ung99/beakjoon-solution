// 이친수

const fs = require('fs');
const filePath = './input.txt';

let input = fs.readFileSync(filePath).toString().trim()
input = +input;

let dp = Array(input + 1);
dp[1] = [0n, 1n];

for (let i = 2; i <= input; i++) {
    dp[i] = Array(2).fill(0n);
    dp[i][0] += dp[i-1][0];
    dp[i][1] += dp[i-1][0];
    dp[i][0] += dp[i-1][1];
}

console.log(dp[input].reduce((prev, cur) => prev + cur).toString());