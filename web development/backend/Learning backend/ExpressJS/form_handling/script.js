//form handling and working with the forms

const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
 
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
 