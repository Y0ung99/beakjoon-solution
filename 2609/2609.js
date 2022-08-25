// 최대공약수와 최소공배수

const fs = require('fs');
const filePath = './input.txt';

let [a , b] = fs.readFileSync(filePath).toString().trim().split(' ');

let gcd = 1;
let lcm = 1;

let min = Math.min(a, b);

for (let i = min; 1 < i; i--) {
    if ((a % i == 0) && (b % i == 0)) {
        gcd = i;
        break;
    }
}

lcm = gcd * (a / gcd) * (b / gcd);

console.log(gcd);
console.log(lcm);

