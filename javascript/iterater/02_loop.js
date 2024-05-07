//v28

const myobj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}

for (const key in myobj) {
   //console.log(myobj[key]);
 console.log(`${key} the value is ${myobj[key]}`)   
}


const ar=["js",'cpp','c'];
for (const key in ar) {
   //console.log(key) ;   //it will give index only
           console.log(ar[key]);
    }



    const map= new Map();
map.set('in', "india")
map.set('usa',"united states")
map.set('fr',"france")
map.set('in', "india")
 
for (const key in map) {
    console.log(map);
 
}
