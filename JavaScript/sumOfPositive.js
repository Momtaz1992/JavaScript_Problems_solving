//you get an array of numbers, return the sum of all of the positives ones
// initValue = 0
// array loop
//check if number is positive or no
//add the number to the initvalue if positive

//first way
function sumOfPositive(arr){
       let initValue = 0;
       for(let i=0; i<arr.length;i++){
              if(arr[i] > 0){
                     initValue += arr[i];
              }
       }
       return initValue;
}
console.log(sumOfPositive([1,-2,3]));
//second way
function sumOfPositive2(arr){
       return arr.filter((x)=> x>0).reduce((pre,cur)=> pre + cur,0)
}
console.log(sumOfPositive2([1,-2,3,-6]));