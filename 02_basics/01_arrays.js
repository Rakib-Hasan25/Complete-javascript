// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //!push from first (not optimized) 
// myArr.shift() //!remove first

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));




//!join bind our array and convert it to string comma separated

// const newArr = myArr.join()

// console.log(myArr);//array
// console.log( newArr);//string





//! slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);



// const myArr = [0, 1, 2, 3, 4, 5]
const myn2 = myArr.splice(1, 3)
//! it take 3 index also
//!and change our exsiting array


console.log("C ", myArr);
// c : [1,2,3]
console.log(myn2);
// [1,2,3]