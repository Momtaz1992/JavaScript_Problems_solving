//write a function called repeatStr which repeats the given string exactly n time
//repeatStr(6, "I") // "IIIIII"
//repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

//create empty string
//take the number argument and loop through 
//add the string to the empty string

//first way
function repeatStr(num,str){
let newString="";
for(let i=0;i<num;i++){
       newString+=str
}
return newString;
}
console.log(repeatStr(6," Hello "));

//second way
function repeatString(number,string){
       return string.repeat(number);
}
console.log(repeatString(6," Hey "));

