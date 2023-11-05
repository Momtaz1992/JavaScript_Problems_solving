// array.fill(value, start, end) Syntax

//Fill all the elements with a value 

const fruits = ["Banana","Orange","Apple","Mango"];
fruits.fill("Kiwi");
console.log(fruits); // [ 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi' ]

// Fill the last two elements : 
const Fruits = ["Banana","Orange","Apple","Mango"];
Fruits.fill("Kiwi",2,4);
console.log(Fruits); // [ 'Banana', 'Orange', 'Kiwi', 'Kiwi' ]