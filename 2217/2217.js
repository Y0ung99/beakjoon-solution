// 로프
const fs = require('fs');
const filePath = './input.txt';
// const filePath = '/dev/stdin';

let [testCase, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
console.log(solution(testCase, arr));

function solution(testCase, arr) {
    let tempArr = [];
    arr = arr.map(value => +value);
    arr.sort((a, b) => a - b);
    for (let i = 0; i < testCase; i++) {
        let tempMax = arr[i] * (testCase - i);
        tempArr.push(tempMax);
    }
    return Math.max(...tempArr);
}