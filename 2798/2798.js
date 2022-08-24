// 블랙잭

const fs = require('fs');
const filePath = './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [cardNum, correct] = input[0].split(' ');
let cards = input[1].split(' ');
let min = 100000;
let sum = 0;

cards = cards.map(value => +value);
cards.sort((a, b) => a - b);

for (let i = 0; i < cardNum - 2; i++) {
    let tempSum = 0;
    for (let j = i + 1; j < cardNum - 1; j++) {
        for (let k = j + 1; k < cardNum; k++) {
            tempSum = cards[i] + cards[j] + cards[k];
            if (tempSum <= correct) {
                let absolute = Math.abs(correct - tempSum);
                if (min > absolute) {
                    min = absolute;
                    sum = tempSum;
                }
            }
        }
    }
}

console.log(sum);