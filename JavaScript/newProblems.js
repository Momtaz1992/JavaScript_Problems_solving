// can you find the needle in the haystack
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