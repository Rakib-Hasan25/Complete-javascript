//! type 01:   if we assign any value we can not change it for "const"
const studentId = 132
// studentId=4555 //give error 



//!type 02: we can change value for let and var 
let studentEmail= "rakib@gmail.com"
var password = "2345"   //we should not use it , 
/*
in previous days of javascript , "var"  didn't follow scope 
so it create problem 
In modern days we alway use "let"
*/




//!type 03: if we don't give any thing like "const" or "let"


// by default it work like "let" 

accountCity ="hi"  //it won't give any error 
accountCity="fsd"

//!type 04: if we don't give any value in variable
let hi ;
console.log(hi)//give "undefined"







