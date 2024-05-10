// singleton  -- when created from constructor


// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//sytex how to use symbol in key
    //!interview
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


//!how to use
//!way1
// console.log(JsUser.email)


//!way2
// console.log(JsUser["email"])


// console.log(JsUser["full name"])
// console.log(JsUser[mySym])



JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
//!now again we can not change it again

JsUser.email = "hitesh@microsoft.com"
//!now it won't be change
// console.log(JsUser);



//!important
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//referance same object (this)
}



console.log(JsUser.greeting); //won't execuit , it return back a function 

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());