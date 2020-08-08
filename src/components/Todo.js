import React from "react";
import Tododata from "./Tododata";

function Todo(props) {

    return (
        <div>
            <h1> To Do </h1>
            <input type="checkbox" checked={props.item.completed}/>
            <p> {props.item.text} </p>


        </div>
        
        )
}
export default Todo;