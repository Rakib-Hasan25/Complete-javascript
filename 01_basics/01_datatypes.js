/*
Todays javascript and previous versions of javascript has lots of differences 
previous versions of javascript they don't support module , classes and arrow functions

*/ 


"use strict"; //treat all js code as newer versions
//but nowadays by default everything  use 'use strict';


//alert(3+3) //we are using nodejs, not browser




//! datatype(premitive)

//number => 2 to power 53
//bigint
//string =>""
//boolean =>true or false
//! null => standalone value  ( it mean empty value ) not zero


/*if we try to fetch tempratrue from server if there is proplem in server 
and it send me "zero" , it i don't want .    i perfer null ( beacause it don't give wrong 
    result i can understand that there is something wrong)
*/

//! undefined => we we don't assign anything in variable
//symbol => for unique
const id =Symbol('234')
const another =Symbol('234')
console.log(id === another)//give false (special behaviour)





const score = 100 //Number
const scoreValue = 100.3//Number

const isLoggedIn = false
const outsideTemp = null
let userEmail;




// const bigNumber = 3456543576654356754n



// !data type (non-premitive) 
// Array,object, functions

const hr=["3", "string",2]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof(myFunction)) //object function 



//!important for interview 
console.log(typeof(null)) //object  --> it is problem in language
console.log(typeof(undefined))//undefined



