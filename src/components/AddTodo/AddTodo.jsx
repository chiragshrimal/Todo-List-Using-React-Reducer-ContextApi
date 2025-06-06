import { useContext, useState } from "react";
import TodoDispachContext from "../../Context/TodoDispachContext";

// no need to pass update list because we are using context api concept 
// and  reducer concept 
function AddTodo({updateList}){
    const [inputText,setInputText]=useState("");
    const {dispatch}=useContext(TodoDispachContext);
    return (
        <div>
            <input 
                type="text"
                value={inputText}
                placeholder="add your next todo"
                onChange={(e)=>setInputText(e.target.value)}
            />
            <button onClick={()=>{
                dispatch({type: "add_todo", payload : {todoText:inputText}})
                setInputText("");
                }}>Add</button>
        </div>
    )
}

export default AddTodo;