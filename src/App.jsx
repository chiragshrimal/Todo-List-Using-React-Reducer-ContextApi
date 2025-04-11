import { useReducer, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'


// normally hum app se child se child se child prop pass kar rhe hai 
// and ydi kisi child ko koi value pe kam krna hi toh uske liye hme 
// callback pass krne pd rhe hai 
// toh is problem ko solve krne ke liye ya toh redux ka use kiya jata hai 
// ya fir context Api ka use kiya jata hai        

// in the context Api ******
// ************
// No need to pass props manually down multiple levels.
// Great for theme, language, auth, or even global state in small apps.
// Easy to implement.

import TodoContext from './Context/TodoContext'
import todoReducer from './Reducer/todoReducer'
import TodoDispachContext from './Context/TodoDispachContext'

function App() {
  // bina setter function ke bhi state ko update kar skte hai 
  // const [list, setList]=useState([
  //   {id:  1, todoData : "todo 1", finished: false},
  //   {id : 2, todoData : "todo 2",finished: false}
  // ]);

  const [list,dispatch]=useReducer(todoReducer,[]);
  return (
    // isme bind krne ab parent me prop pass krne ki jarurat nhi hai 
    <TodoContext.Provider value={{list}}>
      <TodoDispachContext.Provider value={{dispatch}}>
      {/* add the new todo */}
      <AddTodo/>
      {/* printing the todo list  */}
      {/* agar actual list m finished ko change krna hai toh setList pass krna pdega as prop */}
      <TodoList />
      </TodoDispachContext.Provider>
    </TodoContext.Provider>
  )
}

export default App
