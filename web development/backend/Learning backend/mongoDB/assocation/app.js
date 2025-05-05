const express= require("express");
const app = express();
const usermodel = require("./models/user");
const postmodel = require("./models/post");


app.get("/",function(req,res){
    res.send("hey");
})

app.get("/create", async function(req,res){
    let user = await usermodel.create({
        username: "shivam",
        age: 25,
        email: "shivam@gmail.com"
    });

    res.send(user);
})


app.get("/post/create", async function(req,res){
    let post = await postmodel.create({
        postdata: "hello sare",
        user: "67ea7c21fd64dcf897ee7b8e" 
        
    });

    let user = await usermodel.findOne({_id: "67ea778c78c9a351e30b6c93"});
    user.posts.push(post._id);
    await user.save();
    res.send({post,user});
})


app.listen(3000);