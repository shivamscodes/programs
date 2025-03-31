const express= require('express');
const app = express();
const path = require('path');
const usermodel = require('./models/user')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));


app.get("/", function(req,res){
    res.render("index");
});


app.get("/read",async function(req,res){
  let allusers =  await usermodel.find();
    res.render("read", {users: allusers});
});


app.post("/create", async function(req,res){
    let{name, email,image} = req.body;

  let createduser = await usermodel.create({
        name: name,
        email: email,
        image: image,
    });

    res.redirect("/read");
});


app.get("/delete/:id",async function(req,res){
    let allusers =  await usermodel.findOneAndDelete({_id: req.params.id});
      res.redirect("/read");
  });


  app.get("/edit/:userid",async function(req,res){
    let user =  await usermodel.findOne({_id: req.params.userid});
      res.render("edit",{user});
  });

  app.post("/update/:userid",async function(req,res){
    let{image,email,name} = req.body;
    let user =  await usermodel.findOneAndUpdate({_id: req.params.userid},{image,email,name},{new:true});
    res.redirect("/read")
   });




app.listen(3000);