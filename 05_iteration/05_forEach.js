const coding = ["js", "ruby", "java", "python", "cpp"]

//!it take a function or arrow function
//!we can only use it while iterating over array
//!foreach found on array prototype( we can see in  browser console )


// coding.forEach( function (val){
//         console.log(val);
        
//     } )
    






//! .forEach doesn't return anything so,we can't hold it like a variable

// var hi =coding.forEach( function (val){
//     console.log(val);
// } )
// console.log(typeof(hi))







// coding.forEach( (item) => {
//     console.log(item);
// } )





// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)




//!important , while iteration we get every item, index and the whole array 
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )






