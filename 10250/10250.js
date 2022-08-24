const fs = require('fs');
const filePath = './input.txt';

let [testCase, ...line] = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < testCase; i++) {
    let [h, w, guest] = line[i].split(' ');
    let ho = Math.ceil(guest / h);
    ho = ho.toString();
    if (ho.length === 1) ho = '0' + ho;

    let count = 0;
    for (let j = ho * h; j > (ho * h) - h; j--) {
        if (j == guest) break;
        count++;
    }

    let cheng = h - count;
    console.log(cheng + ho);
}