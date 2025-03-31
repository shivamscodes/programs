import { useEffect, useState } from "react";

export default function Joker(){
    const url ="https://official-joke-api.appspot.com/random_joke";

    let [joke,setjoke] = useState({});


    const getjoke = async () => {
        let respose = await fetch(url);
        let jsonresponse = await respose.json();
        console.log(jsonresponse);
        setjoke({setup : jsonresponse.setup, punchline : jsonresponse.punchline})
    }

    useEffect(() => {
        async function getfirdtjoke() {
        let respose = await fetch(url);
        let jsonresponse = await respose.json();
        console.log(jsonresponse);
        setjoke({setup : jsonresponse.setup, punchline : jsonresponse.punchline})
    }
    getfirdtjoke();
},[]);


    return (
        <div>
           <h3>joke !</h3>
           <h2>{joke.setup}</h2>
           <h2>{joke.punchline}</h2>
            <button onClick={getjoke}>New Joke</button>
        </div>
    )
}