// 계단오르기

const fs = require('fs');
const path = './input.txt';
let [num, ...stairs] = fs.readFileSync(path).toString().trim().split('\n');
num = +num;
stairs = stairs.map(Number);
let dp = Array(num).fill(0);

dp[0] = stairs[0];
dp[1] = stairs[0] + stairs[1];
dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);

for (let i = 3; i < num; i++) {
    dp[i] = Math.max(stairs[i] + stairs[i - 1] + dp[i - 3], stairs[i] + dp[i - 2]);
}

console.log(dp[num - 1]);