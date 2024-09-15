import { useState } from "react";
import {useFormik} from "formik";


export default function Commentsform({addNewcomment}){
    let [formdata,setformdata] = useState({
            username : "",
            remark : "",
            rating : 0,        
    });

    const validate = values => {
        const errors = {};
      
        if (!values.username) {
          errors.username = 'Required';
        } 
      
        return errors;
      };

    // const formik = useFormik({
    //     initialValues: {
    //       username: '',
    //       remark: '',
    //       rating: 1,
    //     },
    //     validate,
    //     onSubmit: values => {
    //       alert(JSON.stringify(values, null, 2));
    //     },
    //   });
 
        let handelInputChange = (event) => {
            setformdata((currdata) =>{
                return {...currdata, [event.target.name] : event.target.value };
            }
            )
        }
 
        let handelsubmit = (event)=>{
            addNewcomment(formdata);
            event.preventDefault();
            setformdata({
                username : "",
                remark : "",
                rating : 0,
            })
        }





    return (
      <div>  <h1>Give a comment</h1>
        <form>
            <label htmlFor="username">username</label>
            &nbsp;&nbsp;
            <input placeholder="username" type="text" value={formdata.username} onChange={handelInputChange} id="username" name="username"></input>
            <br/><br/>

            <label htmlFor="rating">rating</label>
            &nbsp;&nbsp;
            <input placeholder="rating" type="number" min={1} max={5} value={formdata.rating} onChange={handelInputChange} id="rating" name="rating"></input>
            <br/><br/>

            <label htmlFor="remark">remark</label>
            &nbsp;&nbsp;
            <textarea value={formdata.remark} placeholder="add remark" onChange={handelInputChange} id="remark" name="remark"></textarea>
            <br/><br/>
            <button onClick={handelsubmit}>Add Comment</button>
        </form>
        </div>
    )
}