// 부녀회장이 될테야
const fs = require('fs');
const filePath = './input.txt';

let [testCase, ...int] = fs.readFileSync(filePath).toString().trim().split('\n');

int = int.map(value => +value);

for (let i = 0; i < testCase; i++) {
    let [h, w] = int.splice(0, 2);
    let apt = [];
    apt[0] = [];

    for (let j = 1; j <= w; j++) apt[0].push(j);
    for (let k = 1; k <= h; k++) {
        apt[k] = [];
        for (let j = 1; j <= w; j++) {
            let sum = 0;
            for (let l = 0; l < j; l++) {
                sum += apt[k-1][l];
            }
            apt[k].push(sum);
        } 
    }
    console.log(apt[h][w-1]);
}