let a = 1042; // number
let b = "apples and oranges"; // string
const c = "pineapples"; // pineapples
let d = [true, true, false]; // boolean[]
let e = { type: "ficus" }; // {type: string}
let f = [1, false]; // number | boolean []
const g = [3]; // number[]
let h = null; // any

let i: 3 = 3;
// i=4 // error pattern.

let j = [1, 2, 3];
j.push(4);
// j.push('5') // error pattern.

// let k:never = 4 // error pattern.

let l: unknown = 4;
// let m = l * 2 // error pattern.
