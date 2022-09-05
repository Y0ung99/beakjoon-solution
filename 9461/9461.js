// 파도반 수열

const fs = require('fs');
const path = './input.txt';
let [cases, ...num] = fs.readFileSync(path).toString().trim().split('\n');

num = num.map(Number);

for (let i = 0; i < cases; i++) {
    let dp = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
    let input = num[i];
    for (let j = 11; j <= input; j++) {
        dp[j] = dp[j-5] + dp[j-1]; 
    }
    console.log(dp[input]);
}


