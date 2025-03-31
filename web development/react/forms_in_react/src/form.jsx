import { useState } from "react"

export default function Form(){
   //let [fullname,setfullname] = useState("shivam");

   let [formdata,setformdata] = useState({
    fullname : "",
    username : "",
    password : "",
   });


//    let handelNamechange = (event)=> {
//          setfullname(event.target.value);
//     };

    let handelInputChange = (event) =>{
        // let fieldname = event.target.name;
        // let newvalue = event.target.value;

        setformdata((currdata) => {
            // currdata[fieldname] = newvalue;
            return {...currdata,[event.target.name] : event.target.value};
        });
    };
   
    let handelsubmit = ()=>{
        event.preventDefault();
        setformdata({
             fullname : "",
             username : "",
            password : "",
        });
    }

    return (
        <form onSubmit={handelsubmit}>
            <label htmlFor="username">user Name</label>
            &nbsp;
            <input placeholder = "enter your user name" 
            type="text" 
            value={formdata.username} 
           onChange={handelInputChange} 
            id="username"
            name ="username"></input>

            <br/><br/>

            <label htmlFor="fullname">Full Name</label>
            &nbsp;
            <input placeholder = "enter your full name" 
            type="text" 
            value={formdata.fullname} 
           onChange={handelInputChange} 
            id="fullname"
            name ="fullname"></input>
          
             <br/>
             <label htmlFor="password">password</label>
            &nbsp;
            <input placeholder = "enter password" 
            type="password" 
            value={formdata.password} 
           onChange={handelInputChange} 
            id="password"
            name ="password"></input>
           &nbsp;
            <button>submit</button>            
        </form>
    )
}