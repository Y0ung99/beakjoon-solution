// 가장 긴 바이토닉 부분 수열
const fs = require('fs');
const path = './input.txt';

let [length, suyeal] = fs.readFileSync(path).toString().trim().split('\n');
length = +length;
suyeal = suyeal.split(' ').map(Number);

let dpUp = Array(length).fill(1);
let dpDn = Array(length).fill(1);

for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
        if (suyeal[i] > suyeal[j]) {
            dpUp[i] = Math.max(dpUp[i], dpUp[j] + 1);
        }
    }
}

for (let i = length; i >= 0; i--) {
    for (let j = i; j < length; j++) {
        if (suyeal[i] > suyeal[j]) {
            dpDn[i] = Math.max(dpDn[i], dpDn[j] + 1);
        }
    }
}

let max = 0;
for (let i = 0; i < length; i++) {
    let temp = dpUp[i] + dpDn[i];
    if (temp > max) max = temp;
}

console.log(max - 1);