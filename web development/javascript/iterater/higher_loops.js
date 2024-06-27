//for of

let arr=[1,2,3,4,5]
for(const i of arr){
   // console.log(i);
}

let greeting="hello world"
for(const i of greeting){
 //   console.log(i);
}


//maps


const map= new Map();
map.set('in', "india")
map.set('usa',"united states")
map.set('fr',"france")
map.set('in', "india")

console.log(map);

for (const [i,value] of map) {
   console.log(i," -",value);
}
    
// const myobj={
//     'game':'nsf',
//     'play':'cod'
// }
// for (const [key,value] of myobj) {
//     console.log(key," -",value);
//  }
     



