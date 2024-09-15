
function Msg({username , textcolor}){

    return (
        <div>
           <h3>HELLO </h3>
            <h2 style = {{color : textcolor}}> {username}</h2>
            
        </div>
    );
}

export default Msg;