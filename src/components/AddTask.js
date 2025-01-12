import "./AddTask.css";
// import React from 'react';
import React from 'react'
import { useState ,useRef} from 'react';

const AddTask = ({tasks, setTask}) => {
    const [taskValue ,setTaskValue] =useState ("");
    // const taskValue = useRef();
    const [progress ,setProgress] = useState("false");

    const handleChange = (event)=>{
        console.log("event.target.value");
        setTaskValue(event.target.value);
    }
    const handelReset = (event)=>{
        console.log("event.target.value");
        setTaskValue(" ");
        setProgress("false");
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        const newTask = {
            id:Math.floor(Math.random()*100000),
            name:taskValue,
            completed:progress === "true", 
        }
        // setTask([...tasks,newTask]);
        setTask([...tasks, newTask]);
        // console.log(task);
        handelReset();

    }
  return (
  <section className="addtask">
    <form onSubmit={handleSubmit}>
        <p>{taskValue}</p>
        <label htmlFor='task'>TaskName:</label>
        <input onChange={handleChange} type="task" id="task" className="task" placeholder='Taskname' value={taskValue} ></input>
        <select onChange={(event)=>setProgress(event.target.value)} value={progress}>
            <option value="false">Pending</option>
            <option value="true">Compeleted</option>
        </select>

        <span onClick={handelReset}><button>Reset</button></span>
        <button type='submit'>Add Task</button>
        <br></br>
        <p>{taskValue.length}</p>

    </form>
  </section>
  )
}

export default AddTask
