import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function TodoList(){

    let [todos,settodos] = useState([{task : "sample task", id :uuidv4() , isdone : false}]);
    let [newtodo,setnewtodo] = useState(""); 

    let addnewTask= ()=>{
        settodos ((prevtodos) => {
          return  ([...todos,{task : newtodo, id : uuidv4() , isdone : false}]);
        });
        setnewtodo("");
    };

    let updateTodo=(event) => {
       setnewtodo(event.target.value);
    };

    let deletetodo= (id)=>{
        settodos((prevtodo) => todos.filter((prevtodo) => prevtodo.id != id));
    };
   

    let uppercase = () =>{
     settodos( (prevtodo) => (
        prevtodo.map((todo) => {
            return {
                ...todo,
                task : todo.task.toUpperCase(),
            };
        })
    ));
    };


    let uppercaseOne = (id)=> {
        settodos( (prevtodo) => (
            prevtodo.map((todo) => {
                if(todo.id == id){
                return {
                    ...todo,
                    task : todo.task.toUpperCase(),
                };
            }else{
                return todo;
            }
            })
        ));
    }

    let markDone = (id) =>{
        settodos( (prevtodo) => (
            prevtodo.map((todo) => {
                if(todo.id == id){
                return {
                    ...todo,
                     isdone : true,
                };
            }else{
                return todo;
            }
            })
        ));
    }


    let Alldone = () =>{
        settodos( (prevtodo) => (
           prevtodo.map((todo) => {
               return {
                   ...todo,
                isdone : true,
                };
           })
       ));
       };


    return (
        <div  >
        <h1>TODO LIST</h1>
        <input placeholder="item to add" value={newtodo} onChange={updateTodo}></input>
         
        &nbsp; &nbsp;
        <br/>
        <button onClick={addnewTask}>ADD</button>   
        <br/>  

        <hr></hr>
        <h4>Task Todo</h4>
        <ul>
            {
                todos.map((todo) => (
                <li key={todo.id}>
                    <span style= {todo.isdone ? {textDecoration : "line-through"} : {} }>{todo.task}</span>
                    &nbsp; &nbsp;&nbsp;
                    <button onClick={() =>deletetodo(todo.id)}>Delete</button>
                    &nbsp; &nbsp;
                    <button onClick={() =>uppercaseOne(todo.id)}>urgent one</button>
                    &nbsp; &nbsp;
                    <button onClick={() =>markDone(todo.id)}>DONE</button>
                    </li>
                ))}
        </ul>

        <br/>
        <button onClick = {uppercase}>ALL urgent</button>
        <br/>
        <button onClick = {Alldone}>ALL DONE</button>
        </div>
    );
}


export default TodoList;
