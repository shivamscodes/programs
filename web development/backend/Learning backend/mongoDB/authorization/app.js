const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usermodel = require("./models/user");


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.set('view engine','ejs');
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.render("index");
})

app.post('/create', (req,res)=>{
    let {username,email,password,age} = req.body;

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password, salt, async (err,hash)=> {
            let createduser = await usermodel.create({
                username,
                email,
                password: hash,
                age
            }) 

            let token = jwt.sign({email}, "shhh");
            res.cookie("token",token);

            res.send(createduser);
        })
    })    
   
})


app.get("/login",function(req,res){
    res.render('login');
})


app.post("/login", async function(req,res){
    let user = await usermodel.findOne({email: req.body.email});
    if(!user)  return res.send("something is wrong");
    

    bcrypt.compare(req.body.password, user.password, function(err,result){
        if(result) {
            
            let token = jwt.sign({email: user.email}, "shhh");
            res.cookie("token",token); 
            res.send("yes you can login");
        }
        else res.send("no you cant login");
    })
})


app.post("/logout", function(req,res){
    res.cookie("token",""); 
    res.redirect("/");
})


app.listen(3000);