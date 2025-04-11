import Todo from "../Todo/Todo"

import TodoContext from "../../Context/TodoContext";
import { useContext } from "react";
import TodoDispachContext from "../../Context/TodoDispachContext";

function TodoList(){
    // below is the context hoop 
    // ydi parent m context ki value provide kar di hai then 
    // child wgr m un values ko access krne ke liye below hook ka use krna hai
    // isse ye hoga ki parent ko barbar child m prop pass nhi krne pdenge 
    // because aapne object set kiya the parent m valu ke use se 
    // toh yha bhi object se hi loge na
    const {list}=useContext(TodoContext);
    const {dispatch}=useContext(TodoDispachContext);
    return (
        <div>
            {(list.length>0) &&
             list.map((todo)=> <Todo 
                            // all todo ko uniquely idenr=tify krne ke liye  
                                key={todo.id} 
                                todoData={todo.todoData} 
                                 isFinished={todo.finished} 
                                 changeFinished={(isFinished)=>dispatch({type:"isFinished",payload : {todo,isFinished}})}
                                 onDelete={()=>dispatch({type:"onDelete", payload : {todo}})}
                                 onEdit={(todoText)=>dispatch({type:"edit_todo", payload : {todo,todoText}})}
                                />)}
        </div>
    )
}

export default TodoList