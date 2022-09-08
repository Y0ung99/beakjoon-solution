// 카드 구매하기

const fs = require('fs');
const path = './input.txt';
let [buy, price] = fs.readFileSync(path).toString().trim().split('\n');

buy = +buy;
price = price.split(' ').map(Number);
price.unshift(0);
let dp = Array(buy + 1).fill(0);

for (let i = 1; i <= buy; i++) {
    for (let j = 1; j <= i; j++) {
        dp[i] = Math.max(dp[i], dp[i-j] + price[j]);
    }
}

console.log(dp[buy]);


