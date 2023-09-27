// create a function that takes an integers as an argument and returns "even" for even numbers or "odd" for odd numbers

//first way =>
function evenOrOdd(number){
       if (number %2 === 0){
              return "Even"}
              else{
                     return "Odd"
              }
}
console.log(evenOrOdd(6));
console.log(evenOrOdd(3));
//second way =>
function evenOrOddNumber(value){
       return value % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOddNumber(6));
console.log(evenOrOddNumber(3));
