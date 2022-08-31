// 가장 긴 감소하는 부분 수열
const fs = require('fs');
const path = './input.txt';
let [length, suyeal] = fs.readFileSync(path).toString().trim().split('\n');
length = +length;
suyeal = suyeal.split(' ').map(Number);

let dp = Array(length).fill(1);

for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
        if (suyeal[i] < suyeal[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(Math.max(...dp));