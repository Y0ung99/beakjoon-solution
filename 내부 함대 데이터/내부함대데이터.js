const oneArr = [];
const twoArr = [];
const threeArr = [];
const forthArr = [];

oneArr.push('SHIP NAME');
oneArr.push('N2 Bomber');
oneArr.push('J-Type 327');
oneArr.push('NX Cruiser');
oneArr.push('N1 Starfighter');
oneArr.push('Royal Cruiser');

twoArr.push('CLASS');
twoArr.push('Heavy Fighter');
twoArr.push('Light Combat');
twoArr.push('Medium Fighter');
twoArr.push('Medium Fighter');
twoArr.push('Light Combat');

threeArr.push('DEPLOYMENT');
threeArr.push('Limited');
threeArr.push('Unlimited');
threeArr.push('Limited');
threeArr.push('Unlimited');
threeArr.push('Limited');

forthArr.push('IN SERVICE');
forthArr.push('21');
forthArr.push('1');
forthArr.push('18');
forthArr.push('25');
forthArr.push('4');

for (let i = 0; i < 6; i++) {
    let oneLen = oneArr[i].length;
    let twoLen = twoArr[i].length;
    let threeLen = threeArr[i].length;
    let forthLen = forthArr[i].length;

    for (let j = oneLen; j <= 14; j++) {
        oneArr[i] += ' ';
    }

    for (let j = twoLen; j <= 14; j++) {
        twoArr[i] += ' ';
    }

    for (let j = threeLen; j <= 10; j++) {
        threeArr[i] += ' ';
    }
    
    for (let j = forthLen; j <= 9; j++) {
        forthArr[i] += ' ';
    }
}

for (let i = 0; i < 6; i++) {
    console.log(oneArr[i]+twoArr[i]+threeArr[i]+forthArr[i]);
}