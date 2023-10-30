// find((element) => { /* ... */}) Syntax
// find methode returns the first element in the provided array
const array = [5,12,8,130,44];

const found = array.find((e)=>{
       return e>10
})
console.log(found); // output 12