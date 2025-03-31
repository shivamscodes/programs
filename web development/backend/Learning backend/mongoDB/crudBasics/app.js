const express = require('express');
const app =  express();

const usermodel = require("./usermodel");
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/",function(req,res){
    res.send("hey");
})


app.get("/create", async function(req,res){
    let createuser = await usermodel.create({
        name: "shivam",
        email: "shivam@gamil.com",
        username: "shivam",
    })
    res.send(createuser);

})


app.get("/update", async (req,res)=>{
    let updateduser = await usermodel.findOneAndUpdate({username: "shivam"}, {name: "shivam sharma"}, {new: true});

    res.send(updateduser);
})


app.get("/read", async (req,res) => {
   let users =  await usermodel.find();
    res.send(users);

    // let users =  await usermodel.findOne({username: "shivam"});
    // res.send(users);
})

app.get("/delete", async (req,res)=>{
    let users = await usermodel.findOneAndDelete({name: "shivam" });
    res.send(users);
})



app.listen(3000);