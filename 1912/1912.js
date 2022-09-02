// 연속합

const fs = require('fs');
const path = './input.txt';

let [num, suyeal] = fs.readFileSync(path).toString().trim().split('\n');
num = +num;
suyeal = suyeal.split(' ').map(Number);
suyeal.unshift(0)

let dp = Array(num+1);
dp[0] = suyeal[1];
dp[1] = suyeal[1];

for (let i = 2; i <= num; i++) {
    if (dp[i-1] + suyeal[i] >= suyeal[i]) {
        dp[i] = dp[i-1] + suyeal[i];
    } else {
        dp[i] = suyeal[i];
    }
}

console.log(Math.max(...dp));