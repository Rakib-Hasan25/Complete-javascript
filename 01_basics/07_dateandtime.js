// Dates

let myDate = new Date()
/*
Date objects give an integral number that represents milliseconds 
from January 1, 1970, UTC (the epoch). to now
*/
console.log(myDate);
// 2024-05-10T21:17:25.246Z

console.log(myDate.toString());
// Sat May 11 2024 03:17:25 GMT+0600 (Bangladesh Standard Time)


console.log(myDate.toDateString());
// Sat May 11 2024




console.log(myDate.toLocaleString());
// 5/11/2024, 3:19:41 AM


console.log(typeof myDate);
//! object



// let myCreatedDate = new Date(2023, 0, 24)//year, month, day
// console.log(myCreatedDate.toDateString()) 
//! Tue Jan 23 2023  -> month starts from 0





// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString()) 
//! 1/23/2023, 5:03:00 AM




// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());
//! here 01 means january
//! 1/14/2023, 6:00:00 AM


// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());
//! 1/14/2023, 12:00:00 AM




// let myTimeStamp = Date.now() //!give time in milliseconds since 1970

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// 1715376686728
// 1673632800000
// console.log(Math.floor(Date.now()/1000));//!in second
// 1715376904




// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);  //month starts from 0

// console.log(newDate.getDay()); //day starts from monday (1)
// console.log(newDate.getTime());



// `${newDate.getDay()} and the month ${newDate.getMonth() + 1} `



newDate = new Date()
hi =newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(hi)