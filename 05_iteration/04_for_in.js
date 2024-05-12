//!while iteration in object we should use "for in"


// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }




for (const key in myObject) {
//! we get key of object


    //console.log(`${key} shortcut is for ${myObject[key]}`);
}




const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
    //!0 1 2 3 4 
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


// IN,USA,Fr