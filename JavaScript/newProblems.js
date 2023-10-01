// can you find the needle in the haystack and which postion of index
//find the needle at position plus the index 

function findNeedle(haystack) {
       for (let i=0;i<haystack.length;i++){
              if(haystack[i]==="needle"){
                     return "found the needle at position " + i;
              }
       }
}
console.log(findNeedle(["momtaz","needle","momtaz","needle",]))

// secondway
function findNeedle(haystack) {
       return "found the needle at position " + haystack.indexOf("needle")
}
console.log(findNeedle(["momtaz","needle","momtaz","needle",]))

const str = "127.456";
const num = parseFloat(str).toFixed(2);
console.log(num)

// count of positives / sum of negatives
function countPositivesSumNegatives(input){
       let positivesArray =[];
       let sumNegatives=0;
       for(let i=0;i<input.length;i++){
              if(input[i]>0){
                     positivesArray.push(input[i]);
              }else{
                     sumNegatives +=input[i];
              }
       }
       return [positivesArray.length, sumNegatives];
}
console.log(countPositivesSumNegatives([1,2,3,4,5,6,-1,-2,-3,-4,-5,-6]))
// second way
function countPositivesAndSumNegatives(inputString){
       let positiveNumber=inputString.filter((x)=> x>0).length
       let negativesSum=inputString.filter((x)=> x<0).reduce((pre,cur)=> pre+cur)
       return [positiveNumber,negativesSum]
}
console.log(countPositivesAndSumNegatives([1,2,3,4,5,6,-1,-2,-3,-4,-5,-6]))

// Double Char
function doubleChar(str){
       return str.split("").map((x)=> x.repeat(2)).join("")
}
console.log(doubleChar("string"))

// Basic Mathematical Operations
function basicOp(Operation,value1,value2){
       return eval(value1 + Operation + value2)
}
console.log(basicOp("+",4,7))
console.log(basicOp("*",4,7))

//second Way 
function basicOpp(Operation,value1,value2){
       if(Operation === "+")return value1+value2;
       if(Operation === "-")return value1-value2;
       if(Operation === "*")return value1*value2;
       if(Operation === "/")return value1/value2;
}
console.log(basicOp("+",4,7))