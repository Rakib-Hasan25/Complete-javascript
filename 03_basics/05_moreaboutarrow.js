
//!explicit return ( we have to type "return" to return value )
// const addTwo = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(1,2))//3




//!implicit return ( we don't have to type "return" to return value) 
//we don't use {}

// const addTwo = (num1,num2) => (num1+num2 )
// const addTwo = (num1,num2) => num1+num2


// console.log(addTwo(1,2))//3


//!if we have to return a object implicitly



const  username = () => ( 
    {
        name:"RAKIB",
        age:12
    } 
)
console.log(username())
