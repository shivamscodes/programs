function handelclick(event){
    console.log("clicked");
    console.log(event);
}

function handelmouse(){
    console.log("bye-bye");
}

function handeldblclick(){
    console.log("double clicked");
}

export default function Button(){
    return (
        <div>
            <button onClick={handelclick}>Click Me!</button>
        <p onMouseOver={handelmouse}>this para is for event demo 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, tempore 
            illum harum totam magnam tenetur quae aspernatur iusto tempora cum doloremque perferendis 
            hic. Soluta
             beatae dolores deleniti saepe, quisquam non.</p>
       
       <button onDoubleClick={handeldblclick}>you just double clicked</button>
        </div>
    );
 }