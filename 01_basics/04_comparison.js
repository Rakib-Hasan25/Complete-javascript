console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);



//!we should avoid these type of conversions

console.log("2" > 1); //we should compare between between same type
console.log("02" > 1);


console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true



console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

// === 


console.log("2" == 2);//type
// when "==" we "2" convert to 2 and then check 



//! it check both data types and value 
console.log("2" === 2);//false