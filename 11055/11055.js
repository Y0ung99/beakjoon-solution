// 가장 큰 증가 부분수열

const fs = require('fs');
const path = './input.txt';

let [length, suyeal] = fs.readFileSync(path).toString().trim().split('\n');
length = +length;
suyeal = suyeal.split(' ').map(Number);

let dp = Array(length).fill(0);

for (let i = 0; i < length; i++) {
    dp[i] = suyeal[i];
    for(let j = 0; j < i; j++) {
        if (suyeal[i] > suyeal[j]) {
            dp[i] = Math.max(dp[i], dp[j] + suyeal[i]);
        }
    }
}

console.log(Math.max(...dp));