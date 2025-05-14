// it take two arguments 
// 1. state 
// 2. action 
// and insted of setter function it return new state/updated state
// jitne bhi callback hai unko likh diya hai na
// ydi reducer function ke through koi action perform krna hai toh 
// action ko dispatch m pass krte hai 
// jha bhi iska hook hum use krenge  
function todoReducer(state,action){

    if(action.type == "add_todo"){
        let todoText= action.payload.todoText;
        return [
            ...state,{id: state.length+1,todoData: todoText, finished:false}
        ];
    }else if(action.type=="edit_todo"){
        let todo=action.payload.todo;
        let todoText=action.payload.todoText;
        const changeList=state.map((t)=>{
            if(t.id == todo.id){
                todo.todoData=todoText;
            }
            return t;
        })
        return changeList;
    }else if(action.type=="delete_todo"){
         // changeList m list of the other aayenge 
         let todo=action.payload.todo;
         const changeList=state.filter((t)=>t.id != todo.id)
         // console.log(changeList)
        return changeList;
    }else if(action.type=="finish_todo"){
        let todo=action.payload.todo;
        let isFinished=action.payload.isFinished;
        const changeList=state.map(t=>{
            if(t.id==todo.id){
                todo.finished=isFinished;
            }
            return t;
        });
        // console.log(changeList);
       return changeList;
    }else {
        return state;
    }
}

export default todoReducer;