import React,{useState} from 'react'

function Add({addTask}) {
   const [text, setText] = useState("")
const handleSubmit=(e)=>{
    e.preventDefault()
    addTask({id:new Date(),text:text,done:false})
    setText("")
}
    return (
        <div className="add-todo">
           <input type="text" value={text} onChange={(e)=>setText(e.target.value)} required
           />
           <button onClick={handleSubmit}>add</button>
        </div>
    )
}

export default Add
