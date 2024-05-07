//array

const arr=[1,2,3,4,5,6];
 
console.log(arr[4]);

let hero=["ironman","caption","hulk","hawkeye"];
console.log(hero[2]);

arr.push(7);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(9);
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.includes(9));  //boolean

console.log(arr.indexOf(5));

const newarr=arr.join();
console.log(newarr);
// console.log(typeOf newarr);


//slice and splice

console.log("A",arr);
const arr2=arr.slice(1,4); //not include the last 
console.log(arr2);
console.log("B",arr);

const arr3=arr.splice(1,4);  //include last and make changes in main array
console.log("C",arr3);
console.log("C",arr);


