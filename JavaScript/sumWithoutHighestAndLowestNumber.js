// sum without highest and lowest number
// {6,2,1,8,10} => 16
// {1,1,11,2,3} => 6

//check if empty value return 0
//find the highest number and the lowest number
//filter withou max and min number
//sum the array

function sumWitoutHighestAndLowestNumber(arr){
       if(arr === null) return 0;
       let max = Math.max(...arr);
       let min = Math.min(...arr);
       const filterArr = arr.filter((x)=> x !== max && x !== min )
       const reduceArr = filterArr.reduce((pre,cur)=> pre + cur , 0)
       console.log(reduceArr)
}
sumWitoutHighestAndLowestNumber([1,2,3,8,4,5,6,1,7,8])

//second way if two or more numbers are same 
function sumWitoutHighestAndLowestNumbers(array){
       if(array == null) return 0;
       return array.sort().slice(1,-1).reduce((pre,cur)=> pre+cur,0)
}
const sum = sumWitoutHighestAndLowestNumbers([1,2,3,8,4,5,6,1,7,8])
console.log(sum)