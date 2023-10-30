// array.isArray(obj) Syntax

let numbers = [1,2,3,4,5,6];
let strng = "CodeBustler";

let isArrayNumbers = Array.isArray(numbers);
let isArrayStrng = Array.isArray(strng);

console.log("Is 'numbers' an array? ", isArrayNumbers);  // true
console.log("Is 'strng' an array? ", isArrayStrng);  // false