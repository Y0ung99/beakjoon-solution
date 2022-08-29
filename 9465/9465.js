// 스티커

const fs = require('fs');
const path = './input.txt';
let [testCase, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');

for(let i = 0; i < testCase; i++) {
    let [length, ...stikers] = inputs.splice(0, 3)
    let up = stikers[0].split(' ').map(value => +value);
    let down = stikers[1].split(' ').map(value => +value);
    let dp = [[0, up[0], down[0]]];

    for (let j = 1; j < length; j++) {
        dp[j] = [
            Math.max(...dp[j-1]),
            Math.max(dp[j-1][0], dp[j-1][2]) + up[j],
            Math.max(dp[j-1][0], dp[j-1][1]) + down[j]
        ];
    }    
    console.log(Math.max(...dp[length-1]));
}