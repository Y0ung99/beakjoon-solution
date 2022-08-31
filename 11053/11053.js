// 가장 긴 증가 부분수열

const fs = require('fs');
const path = './input.txt';

let [num, suyeal] = fs.readFileSync(path).toString().trim().split('\n');

num = +num;
suyeal = suyeal.split(' ').map(Number);
let dp = Array(num).fill(1);

for (let i = 0; i < num; i++) {
    for (let j = 0; j < i; j++) {
        if(suyeal[i] > suyeal[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(Math.max(...dp));