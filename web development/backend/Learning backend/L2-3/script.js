const fs = require('fs');

// fs.writeFile("hey.txt","hey i am learning node js",function(err){
//      if(err) {console.log(err);}
//     else{
//         console.log("done");
//     }
// })

// fs.appendFile("hey.txt"," hey mai to accha hu ",function(err){
//     if(err) {console.log(err);}
//     else{
//         console.log("done");
//     }
// })

// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) console.log(err);
//     else{
//         console.log("remaned");
//     }
// })

// fs.copyFile("hello.txt","./copy/copy.txt",function(err){
//         if(err) console.log(err);
//         else{
//             console.log("copied");
//         }
//     }
//     )


// fs.unlink("hello.txt",function(err){
//     if(err) console.log(err)
//         else console.log("deleted");
// })

fs.rmdir("./copy",{recursive: true}, function(err){
        if(err) console.log(err)
            else console.log("deleted");
    })