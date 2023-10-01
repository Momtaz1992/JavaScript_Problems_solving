//given an integer or a floating-point number,find its opposite
//ex: 1: -1
function oppositeNumber(number){
       return -number} 
console.log(oppositeNumber(-3))

//Return Negative
function returnNegativeNumber(number1) {
       if (number1 > 0) {
              return -number1;
       } else if (number1 < 0) {
              return +number1;
       }
       return number1; 
}

console.log(returnNegativeNumber(-4));
//second way 
//function makenegative(num){ return num>0 ? -num : num}