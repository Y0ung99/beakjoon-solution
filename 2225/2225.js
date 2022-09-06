// 합분해

const fs = require('fs');
const path = './input.txt';
let [N, K] = fs.readFileSync(path).toString().trim().split(' ');

N = +N;
K = +K;

let dp = Array(K + 1);
dp[1] = Array(N + 1).fill(1);

for (let k = 2; k <= K; k++) {
    dp[k] = Array(N + 1).fill(0);
    for (let n = 0; n <= N; n++) {
        for (let j = 0; j <= n; j++) {
            dp[k][n] += dp[k-1][j]; 
        }
        dp[k][n] %= 1000000000;
    }
}

console.log(dp[K][N]);