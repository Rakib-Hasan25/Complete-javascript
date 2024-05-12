//!basic structure
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()





//!pass perameter

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);



//!give default values in perameter


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))




//! can pass multiple value at once 


function calculateCartPrice(val1, val2, ...num1){
    return num1
    //![500,200]
}

console.log(calculateCartPrice(200, 400, 500, 2000))





//! can pass object (way 1)

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

//!way 2 : pass object
handleObject({
    username: "sam",
    price: 399
})



//! can pass array

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    getArray[1]=getArray[1]+20
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(myNewArray);

// console.log(returnSecondValue([200, 400, 500, 1000]));