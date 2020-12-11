import React,{useState} from 'react'
import ModalForm from './ModalForm'

function Todo({todo,removeTask,editTask}) {
    const [oldTask,setOldTask]=useState(todo)
    const [isDone, setIsDone] = useState(todo.done)
    const toggle=()=>{
        setIsDone(!isDone)
    }
 
    return (
        <div className="todo-item">
           <p style={isDone ? {textDecoration:"line-through"}:null}>{todo.text}</p>
                <button onClick={()=>removeTask(todo.id)}>Delete</button>
                <ModalForm oldTask={oldTask} setOldTask={setOldTask} editTask={editTask}/>
                <button onClick={toggle}>Complete</button> 
        </div>
    )
}

export default Todo
