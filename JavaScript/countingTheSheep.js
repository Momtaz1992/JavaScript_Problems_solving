// counting the sheep are present
//creating intial number equal 0
// make a array includes true and false
// count the true
// return the count

function countSheeps(arrayOfSheep) {
       let count = 0;
       arrayOfSheep.map((m)=> {
              if(m === true)
              return count++
       });
       return count;
}
console.log(countSheeps([true,false,true,false,true,false,true,false,true,false,]));
