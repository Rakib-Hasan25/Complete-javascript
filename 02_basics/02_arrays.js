const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//!type1
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]);
// flash


//!type2
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//!type3
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]



//! convert complex array into single array

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]


//!type 4
// console.log(Array.isArray("Hitesh"))//check if array is
// console.log(Array.from("Hitesh")) /convert it to array



//!type 5
// console.log(Array.from({name: "hitesh"})) // interesting
// we have to tell that form array from key or value
//here it return []



//!type 6
// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));
// [100,200,300]