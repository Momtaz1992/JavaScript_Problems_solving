// array.entries(); Syntax

const days = ["sun","mon","tue","wed","thu","fri","sat"];

const day = days.entries();

for (let x of day){
       console.log(x);
} 
/*  output 
[ 0, 'sun' ]
[ 1, 'mon' ]
[ 2, 'tue' ]
[ 3, 'wed' ]
[ 4, 'thu' ]
[ 5, 'fri' ]
[ 6, 'sat' ] */
