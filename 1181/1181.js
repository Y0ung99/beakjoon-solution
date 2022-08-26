// 단어정렬
const fs = require('fs');
const filePath = './input.txt';
let [testCase, ...words] = fs.readFileSync(filePath).toString().trim().split('\n');

let sorted = words.sort((a, b) => a.length - b.length || a.localeCompare(b)).map(word => word.trim());
let unique = new Set(sorted);

Array.from(unique).forEach(value => console.log(value));