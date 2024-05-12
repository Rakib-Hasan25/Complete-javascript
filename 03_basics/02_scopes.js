//!type!: scops and var 
if (true) {
    let a = 10
    const b = 20
    var c = 50
}



// console.log(a);//can't access --> it in different scopes
// console.log(b);//can't access --> it in different scopes
// console.log(c); //access ---> var c can be accessed , it is problem so , we don't use it






//! type 02: nested function and access value




function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);   // accessible : inner function can acces value from outer function
    }
    // console.log(website); ///can not be accessed: OUTER function can NOT acces  value from INNER function

     two()

}

// one()









if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);  //hitesh youtube
    }
    // console.log(website);//! CAN NOT ACCESS valUE
}

// console.log(username); ! CAN NOT ACCESS






// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  //give output 6 

function addone(num){
    return num + 1
}






//"hoisting" simple conecept
addTwo(5)//functions can be accessed before declaration
//expression
const addTwo = function(num){
    return num + 2
}


