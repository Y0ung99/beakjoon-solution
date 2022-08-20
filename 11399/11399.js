const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
input = input.split('\n');



const testCase = +input[0];
const sortArr = input[1].split(' ').map(char => +char);

sortArr.sort((a, b) => a - b);


let resultArr = [];
const result = sortArr.reduce((prev, cur) => {
    resultArr.push(prev);
    return prev + cur;
});

resultArr.push(result);
console.log(resultArr.reduce((prev, cur) => prev + cur));