// 포도주

const fs = require('fs');
const path = './input.txt';

let input = fs.readFileSync(path).toString().trim().split('\n');
let [length, ...wines] = input.map(value => +value);

const dp = Array(parseInt(length)).fill(0);

dp[1] = wines[0];
dp[2] = wines[0] + wines[1];

for (let i = 3; i <= length; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-3] + wines[i-1] + wines[i-2], dp[i-2] + wines[i-1])
}

console.log(dp[length]);