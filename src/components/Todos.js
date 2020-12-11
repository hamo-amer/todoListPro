import React from 'react'
import Todo from './Todo'

function Todos({tasks,setTasks}) {
  
   
    const removeTask=(id)=>{
      setTasks(tasks.filter(task=>task.id!==id))
    }
    const editTask=(id,newText)=>{
const oldTodo=tasks.find(todo=>todo.id===id)
const newTodo={...oldTodo,text:newText}
     setTasks(tasks.map(todo=>todo.id===id ? newTodo:todo))
            }
    
    return (
        <div className="todos-list">
            {tasks.map((todo,i)=>
           <Todo  key={i} todo={todo} removeTask={removeTask} editTask={editTask}/>
            )}
        </div>
    )
}

export default Todos
