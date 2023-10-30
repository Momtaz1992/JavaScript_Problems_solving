// array.splice(index, howmany, item1, ..., itemX)

let arry = [99,32,23,43,53,100];
let splice = arry.splice(2,3,"a","b","c");

console.log(splice); // [ 23, 43, 53 ]
console.log(arry); // [ 99, 32, 'a', 'b', 'c', 100 ]
