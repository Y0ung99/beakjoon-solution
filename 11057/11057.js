// 오르막수
const fs = require('fs');
const filePath = './input.txt';

let input = fs.readFileSync(filePath).toString().trim();
input = +input;

let dp = Array(input + 1);
dp[0] = [];
dp[1] = Array(10).fill(1);

for (let i = 1; i < input; i++) {
    dp[i+1] = Array(10).fill(0);
    for (let j = 0; j <= 9; j++) {
        let sum = 0;
        for (let k = j; k <= 9; k++) sum += dp[i][k]; 
        dp[i+1][j] = sum % 10007;
    }
}

console.log(dp[input].reduce((prev, cur) => prev + cur) % 10007);