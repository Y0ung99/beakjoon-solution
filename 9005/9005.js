// 1,2,3 더하기
const fs = require('fs');
const filePath = './input.txt';

let [testCase, ...n] = fs.readFileSync(filePath).toString().trim().split('\n');

n = n.map(value => +value);

for (let i = 0; i < testCase; i++) {
    let dp = Array(n[i] + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    for (let j = 4; j <= n[i]; j++) {
        dp[j] = dp[j-1] + dp[j-2] + dp[j-3];
    }
    console.log(dp[n[i]]);
}