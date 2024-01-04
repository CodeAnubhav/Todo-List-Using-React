import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: "todo message",
            completed:false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo : (todo , id)=>{},
    removeTodo: (id)=>{},
    toggelCompleter: (id)=>{}
})

export const UseTodo = ()=>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider