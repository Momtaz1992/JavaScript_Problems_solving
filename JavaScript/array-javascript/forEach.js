// array.forEach(myFunction);

// Multiply each element:
const numbers = [65,44,12,4];
numbers.forEach(myFunction);

function myFunction(item,index,arr){
       arr[index]=item*10;
}
console.log(numbers); // [ 650, 440, 120, 40 ]

// EX2
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"