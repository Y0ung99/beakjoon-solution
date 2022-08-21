const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
input = input.split('\n');

const exp = input[0];
const length = exp.length;

let numbers = [];
let numberMinimum = 0;
let numberNum = 0;

for (let i = 0; i < length; i++) {
    let tempSign;
    if (exp[i] === '+') {
        tempSign = '+';
    } else if (exp[i] === '-') {
        tempSign = '-';
    } else {
        numberNum++;
    }
    if (tempSign === '+' || tempSign === '-' || i === length - 1) {
        let str = '';
        for (let j = numberMinimum; j < numberMinimum + numberNum; j++) {
            str += exp[j];
        }
        numbers.push(+str);
        if(!!tempSign) numbers.push(tempSign);
        numberMinimum = i + 1;
        numberNum = 0;
        tempSign = '';
    }
}

while(true) {
    if (numbers.includes('+')) {
        const index = numbers.findIndex(value => value == '+');
        const temp = numbers[index-1] + numbers[index+1];
        numbers[index-1] = temp;
        numbers.splice(index, 2);
    } else {
        break;
    }
}

while(true) {
    if (numbers.includes('-')) {
        const index = numbers.findIndex(value => value == '-');
        const temp = numbers[index-1] - numbers[index+1];
        numbers[index-1] = temp;
        numbers.splice(index, 2);
    } else {
        break;
    }
}
console.log(numbers[0]);