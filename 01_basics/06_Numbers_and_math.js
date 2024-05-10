const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); 
//! give 1 value after floating point 100.1

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3))   
//ans = 124 
// console.log(otherNumber.toPrecision(2)) 



//!precision return string and when we give precision 
// it give precise precision  until it reaches the value


const hundreds = 1000000
//! console.log(hundreds.toLocaleString('en-IN')); output(100,000,00)


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); 
 //!give value (0 to 1)
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)