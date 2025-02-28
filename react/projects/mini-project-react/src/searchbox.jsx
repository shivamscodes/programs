import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css";
import { useState } from 'react';


export default function Searchbox({ updateinfo }) {

    let [city,setcity] = useState("");
    let [error,seterror] = useState(false);

    let url="https://api.openweathermap.org/data/2.5/weather";
    let key="5ea6af2bf04ced22b630728185f8013d";

    let getweatherinfo = async () => {
        try {
      let response =  await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
      let jsonresponse = await response.json();
        console.log(jsonresponse);
        let result = {
            city : city,
            temp: jsonresponse.main.temp,
            tempmin: jsonresponse.main.temp_min,
            tempmax: jsonresponse.main.temp_max,
            humidity:  jsonresponse.main.humidity,
            feelslike: jsonresponse.main.feels_like,
        };
        console.log(result);
        return result;
    }catch(err){
        seterror(true);
    }
    };
       


        let handelChange = (evt) => {
            setcity(evt.target.value);
        };

        let handelsubmit = async (evt) =>{
            try{
            evt.preventDefault();
            console.log(city);
            setcity("");
          let newinfo = await getweatherinfo();
            updateinfo(newinfo);
        }catch(err){
            seterror(true);
        }
        };

    return(
        <div className='searchbox'>
         

            <form onSubmit={handelsubmit}>
            <TextField id="city" label="city name" variant="outlined" required value={city} onChange={handelChange}/>
            <br/><br/>
            <Button variant="contained" type="submit" >search</Button>
            {error && <p style ={{color : "red"}}>no such place exist</p>}
            </form>
        </div>
    )
}