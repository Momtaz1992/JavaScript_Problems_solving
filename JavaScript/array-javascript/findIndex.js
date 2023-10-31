// array.findIndex(function(currentValue, index, arr),thisValue)
// return the index of the first element in an array 

const array1 = [5,12,8,120,130,44];
const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber)); // 3 the first element higer then 13 is 120 and the index 3