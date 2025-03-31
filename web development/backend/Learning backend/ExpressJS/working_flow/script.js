const express = require('express')
const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World');
// })

// app.listen(3000)

// __________________________________________
// app.get(router, requestHandler)
//___________________________________________



//getting a request and response from our browser 

// app.get("/",function(req,res){
//     res.send("champion going to be ");
// })

// app.get("/profile",function(req,res){
//     res.send("mere profile wale page i did request");
// })

// app.listen(3000);


//___________________________________________________________________________________________________________________________________




/// learing how to use a middleware 
//working with middleware 



// app.use(function(req,res,next){
//    console.log("middleware chala");
//    next();
// });

// app.use(function(req,res,next){
//     console.log("middleware chala ek aur baar");
//     next();
//  });



// app.get("/",function(req,res){
//     res.send("champion going to be ");
    
// })

// app.get("/profile",function(req,res){
//     res.send("mere profile wale page i did request");
// });

// app.get("/about",function(req,res){
//     res.send("about page hai ye");
// })

// app.listen(3000);


//_________________________________________________________________________________________________________


//handling errors 



app.use(function(req,res,next){
    console.log("middleware chala");
    next();
 });
 
 
 
 app.get("/",function(req,res){
     res.send("champion going to be ");
     
 })
 
 app.get("/profile",function(req,res){
     res.send("mere profile wale page i did request");
 });
 
 app.get("/about",function(req,res,next){
     return next(new Error("something went wrong"));
 })

 
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500).send('something broke!');
})

 app.listen(3000);
 