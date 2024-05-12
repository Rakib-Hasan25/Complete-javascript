// this ---> refer context (in any scope all the variable is in current context )

const user ={
    username:"rakib",
    price : 999,

    welcomeMessage:function(){
        console.log(this)
        /*

        =>what is inside this 
        "this" has all the variables context in the current scope
{
    
  username: 'rakib',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
        */


        console.log(`${this.username}, `)
    }
}

user.welcomeMessage()
console.log(this)
// output    {}

user.username="hasan"


// output for this call  in "this"


user.welcomeMessage()
/*

{
  username: 'hasan',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}



*/











