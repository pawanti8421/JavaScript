const score = 100;
console.log(score);

const balance = new Number(500.012);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));   //500.01

const otherNumber = 123.8969;

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));
// for more check mdn

// ************************** Maths *************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,5,8,2));
// console.log(Math.max(4,5,8,2));

console.log(Math.random());  //0 to 1 value
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)
console.log(((Math.random()*10)+1).toPrecision(1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max -min + 1)) + min )


