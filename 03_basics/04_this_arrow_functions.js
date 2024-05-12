//!type 1
// function rakib(){
//     console.log(this)
//     /*
// for "this"
//      {
//   global: [Circular *1],
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   structuredClone: [Function: structuredClone],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 49.98890000581741,
//       nodeStart: 4.431199997663498,
//       v8Start: 9.025700002908707,
//       bootstrapComplete: 38.29070000350475,
//       environment: 22.185000002384186,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1715527481066.692
//   },
//   fetch: [AsyncFunction: fetch]
// }
//     */
// }

// rakib()





// function rakib(){
//     let username="rakib"
//     console.log(this.username)//undefined

//     // in this function "this" it has no idea about "username"
// }





//! type 02 : arrow functions 



// const rakib  =  ()=>{
//     console.log(this)

// output : {}

// } 

// rakib()


const rakib  =  ()=>{
    username="rakib"
    console.log(this.username)//undefined


} 

rakib()


//! in arrow functions we have no use "this"  but in function there is use "this"




