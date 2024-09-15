import Searchbox from './searchbox';
import Infobox from './infobox';
import { useState } from 'react';

export default function Weatherapp(){
    const [weatherinfo,setweatherinfo] = useState({
        city : "delhi",
        feelslike : 24.07,
        humidity: 100,
        temp: 23.09,
        tempmax: 23.09,
        tempmin: 23.09,
    });


    let updateinfo = (newinfo) => {
        setweatherinfo(newinfo);
    }


    return (
        <div style= {{textAlign: "center"}}>
            <h2>Weather App</h2>
        <Searchbox updateinfo={updateinfo}/>
        <br/>
        <Infobox info={weatherinfo}/>

        </div>

    )
}