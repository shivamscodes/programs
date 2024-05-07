let heros=["ironman","caption","hulk","hawkeye"];
const dc=["batman","superman","flash"];

// heros.push(dc);

// console.log(heros);
// console.log(heros[4][2]);

let allhero=heros.concat(dc);
console.log(allhero);

const newheros=[...heros,...dc];
console.log(newheros);

let a=[1,2,3,[4,5,6],7,8,[3,6,[0,9]]];

let real_arr=a.flat(Infinity);
console.log(real_arr);

 

console.log(Array.isArray('shivam'));
console.log(Array.from('shivam'));
console.log(Array.from({name:'shivam'})); ///

console.log(Array.isArray([4,5,6]));


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));
