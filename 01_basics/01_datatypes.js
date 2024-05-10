/*
Todays javascript and previous versions of javascript has lots of differences 
previous versions of javascript they don't support module , classes and arrow functions

*/ 


"use strict"; //treat all js code as newer versions
//but nowadays by default everything  use 'use strict';


//alert(3+3) //we are using nodejs, not browser




//! datatype(premitive)




//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt









const score = 100 //Number
const scoreValue = 100.3//Number

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// const bigNumber = 3456543576654356754n




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


//++++++++++++++++++++++++++++++++++++++++++++++++
//Stack memory (premitive) , heap memory (non-premitive)



let rakib = "hiiii"
let otherrakib = rakib // here "rakib"  give a copy of his value
console.log(otherrakib)//"hiiii" 

rakib ="o know"
console.log(rakib)//"o know"
console.log(otherrakib)//"hiiii"

/*
"rakib"  give a copy of his value to "otherrakib"
so when "rakib" value change "otherrakib" value doesn't change
*/ 







// ++++++

let oke  = {
    name: "hitesh",
    age: 22,
}

//non-premitive datatype object store on heap memory 
// and oke get an reference of this

let oke22= oke  // "oke" variable share it reference with "oke22"


oke.name="rakib" // we change name via "oke"

// now oke.name="rakib" and oke22.name="rakib"














