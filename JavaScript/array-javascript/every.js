// every((element)=> { /* code */}); arrow function Syntax

const array1 = [1,30,39,29,10,13];

const isBelow_1 = (curentValue) => curentValue < 40 ;

console.log(array1.every(isBelow_1)); // output  true