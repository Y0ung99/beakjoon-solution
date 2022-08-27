// 2×n 타일링 2
const fs = require('fs');
const filePath = './input.txt';

let input = Number(fs.readFileSync(filePath).toString().trim());

let dp = Array(input + 1).fill(0);

dp[1] = 1n;
dp[2] = 3n;

for (let index = 2; index < dp.length-1; index++) {
    dp[index+1] = dp[index-1] * 2n + dp[index];
}

let result = dp[input] % 10007n;
console.log(result.toString());