// 쉬운 계단 수
const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = +input;

let dp = Array(input + 1).fill(0);
dp[0] = [];
dp[1] = Array(10).fill(1);
dp[1][0] = 0;

for (let i = 1; i < input; i++) {
    dp[i+1] = Array(10).fill(0);
    dp[i+1][1] += dp[i][0] % 1000000000; 
    for (let j = 1; j < 9; j++) {
        dp[i+1][j-1] += dp[i][j] % 1000000000;
        dp[i+1][j+1] += dp[i][j] % 1000000000;
    }
    dp[i+1][8] += dp[i][9] % 1000000000;
}

console.log(dp[input].reduce((prev, cur) => prev + cur, 0) % 1000000000);