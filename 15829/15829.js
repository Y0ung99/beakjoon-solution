const fs = require('fs');
const filePath = './input.txt';

let [length, str] = fs.readFileSync(filePath).toString().trim().split('\n');
let arr = Array.from(str);
let hash = 0n;
let r = 31n;
let M = 1234567891n;
let pow = BigInt(1);

for (let i = 0n; i < length; i++) {
    hash += (BigInt(arr[i].charCodeAt(0) - 96) * pow);
    pow *= r;
}

if (hash >= M) hash %= M;
console.log(Number(hash));

