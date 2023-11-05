// array.reduce(function(total, currentValue, currentIndex, arr), initialValue); Syntax

const numbers = [175, 50, 25];
const result = numbers.reduce(myFunc);

function myFunc(acc, cur){
       return acc - cur;
}
console.log(result); // 100

// EXAMPLE 2
let nums =[10,20,15,30];
let add = nums.reduce(function(accumulator,current,index,array){
       console.log( `accumulator is ${accumulator}`);//10
       console.log( `current is ${current}`);//20
       console.log( `index is ${index}`);//1
       console.log( `array is ${array}`);//10,20,15,30
       console.log(accumulator+current);//30
       console.log(`########################`);
       return accumulator+current;})//30+15=45