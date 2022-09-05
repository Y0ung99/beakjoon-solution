// 타일채우기

const fs = require('fs');
const path = './input.txt';

let input = fs.readFileSync(path).toString().trim();
input = +input;

let dp = Array(input + 1).fill(0);
dp[0] = 1;
dp[2] = 3;

for (let i = 4; i <= input; i += 2) {
    dp[i] = dp[i-2] * 3;
    for (let j = 4; j <= i; j += 2) {
        dp[i] += dp[i-j] * 2;
    }
}

console.log(dp[input]);