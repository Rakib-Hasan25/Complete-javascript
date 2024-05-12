// Immediately Invoked Function Expressions (IIFE)



//! why use IIFE
/*
    function can assess variable from global scope
    username="rakib"
    function rakib(){
        console.log(username)//accessable from global
    }
    

    when we don't want to pollute function with global variable 
    we use IIFE

*/


//to call immediately we can't do like this 
// function chai(){
//     console.log(`DB CONNECTED`);
// }()  
//give error



//! how to call iife

// ()()
// first ()  where we want to write our function defination
// second ()  to call our function 


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED${username}`);
})(); 






//!if we write to iife  we have to give a "semicolon ;" at last and first 
//! iife don't understand where to stop , for that we use ";"


username="rakib"
;(function chai(){
    // named IIFE
    console.log(`DB CONNECTED ${username}`);
})(); 






//!using arrow functions
// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('rakib')