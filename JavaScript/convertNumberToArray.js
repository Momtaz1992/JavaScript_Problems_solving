// convert number to reversed array of digits
//change the number to string
//split the string to an array( devide the characters to array string)
//change the strings in the array to numbers
//reverse the array

function digitize(n){
       return n.toString().split("").map((m)=>Number(m)).reverse()
}
console.log(digitize(567))
