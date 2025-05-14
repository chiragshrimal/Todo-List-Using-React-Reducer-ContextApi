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
    // jab kabhi bhi list and dispatch ko access krenge toh isi trh karenge 
    const {list}=useContext(TodoContext);
    const {dispatch}=useContext(TodoDispachContext);

    function onFinished(todo, isFinished){
        dispatch({type:"finish_todo",payload : {todo,isFinished}})
    }

    function onDelete(todo){
        dispatch({type : "delete_todo", payload: {todo}});
    }

    function onEdit(todo,todoText){
        dispatch({type: "edit_todo",payload : {todo, todoText}});
    }

    return (
        <div>
            {(list.length>0) &&
             list.map((todo)=> <Todo 
                            // all todo ko uniquely idenr=tify krne ke liye  
                                key={todo.id} 
                                todoData={todo.todoData} 
                                 isFinished={todo.finished} 
                                 changeFinished={(isFinished)=>onFinished(todo,isFinished)}
                                 onDelete={()=>onDelete(todo)}
                                 onEdit={(todoText)=>onEdit(todo,todoText)}
                                />)}
        </div>
    )
}
export default TodoList