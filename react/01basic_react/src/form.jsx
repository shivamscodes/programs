function handleformsubmit(event){
    event.preventDefault();
    console.log("form was submited");
}

export default function Form() {

    return(
        <form>
        <input placeholder="write something"></input>
        <button onClick={handleformsubmit}>submit</button>
        </form>
    );
}
