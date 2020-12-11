import React ,{useState}  from 'react'
import './App.css';
import Add from './components/Add'
import Todos from './components/Todos';

var todos=[
  {id:1,text:"Learn HTML",done:true},
  {id:2,text:"Learn JS",done:false},
]
function App() {
  const [tasks, setTasks] = useState(todos)
  const addTask=(task)=>{
    if(task.text==="") { 
      return 
    } else {setTasks([...tasks,task])
    }  
  }


  return (
    <div className="App">
   <Add  addTask={addTask}   />
   <Todos  tasks={tasks} setTasks={setTasks} />
   
    </div>
  );
}

export default App;
 