let num=[1,2,3,4,5,6,7,8,9];

// let newnum= num.map((num) => num+10);

// console.log(newnum);



// ===================++++++++++++++++++++++++++++++-------------------------
//we can use two maps or filters 

let newnum = num
         .map((num)=> num*10) .map((num)=>num+1)
         .filter((num) => num>30)

console.log(newnum);