//  const cookieParser = require('cookie-parser');
// const express = require('express');
//  const app = express();
// const bcrypt = require('bcrypt');


//  app.use(cookieParser());

//  app.get("/",function(req,res){
//     res.cookie("name","shivam");
//     res.send("done");

//  })


//  app.get("/read",function(req,res){
//    console.log(req.cookies);
   
//     res.send("read page");

//  })


//  app.listen(3000);


//authentaction on basics on your own system 
// ____________________________________________________________________________________________________



// const express = require('express');
//  const app = express();
// const bcrypt = require('bcrypt');


//  app.get("/",function(req,res){
//     // bcrypt.genSalt(saltRounds, function(err, salt) {
//     //     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//     //         // Store hash in your password DB.
//     //     });
//     // }); 
    
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash("Password", salt, function(err, hash) {
//                  console.log(hash);
//         });
//     }); 
//  })

 

//  app.listen(3000);

//bcrypting -> encoding the data and mixing it with hash value to make a secreat string


//__________________________________________________________________________________________



// const express = require('express');
//  const app = express();
// const bcrypt = require('bcrypt');


 
//  app.get("/",function(req,res){
//     bcrypt.compare("Password", "$2b$10$NDwQBOpX0vVgkwoeZ/VDsuiroDWJn.N/GZA8IXxJRhnbFOL3fwWi2", function(err, result) {
//        console.log(result);
       
//     });
//  })

 
//  app.listen(3000);


//decrypting using bcrypt on the basics of comparing the data and the password (it is used on the server side)


//__________________________________________________________________________________________



const express = require('express');
 const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


app.use(cookieParser());

 app.get("/",function(req,res){
    let token= jwt.sign({email: "shivam@gmail.com"}, "secret")
    res.cookie("token",token);
    res.send("done");
})

//  app.get("/read", (req,res)=>{
//     console.log(req.cookies.token);
    
//  })


app.get("/read", (req,res)=>{
   let data = jwt.verify(req.cookies.token,"secret");
   console.log(data);
   
    
 })

 app.listen(3000);


 //using jwt 
//  learing its 3 parts ir make for Authentication of the user 