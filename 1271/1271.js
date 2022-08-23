// 엄청난 부자2

const fs = require('fs');
const filePath = './input.txt';
let [money, num] = fs.readFileSync(filePath).toString().split(' ');
money = BigInt(money);
num = BigInt(num);

const equal = money / num;
const nmg = money % num;

console.log(equal.toString());
console.log(nmg.toString());