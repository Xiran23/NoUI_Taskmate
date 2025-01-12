import React from 'react'
import { useState } from 'react';
import TaskCard from './TaskCard';
import BoxCard from './BoxCard';
function TaskList({info,tasks,setTask}) {

    

    function handleDelete(id) {
        setTask(tasks.filter(task => id !== task.id));
        console.log(id);

    }

    const [show, setShow] = useState(true);
    return (
        
        <div class="task-container">
            <p>Prop Drilling :{info}</p>
        <h1 style={{color:"#be3434", border:"1px solid"}}>Task List</h1>
        <button class="toggle-btn" onClick={() => setShow(!show)}>Toggle</button>
        <ul class="task-list">
            {show && tasks.map((task) => (
                <TaskCard key={task.id} info ={info}task={task} handleDelete={handleDelete}> </TaskCard>

                
            ))}
        </ul>
            <BoxCard result = "success">
            <p className='title'>Lorem ipsum dolor</p>
            <p className='description'>
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Eum eveniet culpa nam fugiat beatae 
                asperiores nemo impedit error suscipit aspernatur reprehenderit sit laborum 
                nostrum doloribus illum, rem, commodi, facere quasi?

            </p>

            </BoxCard>

            <BoxCard result = "Warning">
            <p className='title'>Lorem ipsum dolor</p>
            <p className='description'>
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Eum eveniet culpa nam fugiat beatae 
                asperiores nemo impedit error suscipit aspernatur reprehenderit sit laborum 
                nostrum doloribus illum, rem, commodi, facere quasi?

            </p>

            </BoxCard>

     

        

        
        <div className='box alert'>
            <p className='title'>
                Lorem ipsum dolor
            </p>
            <p className='description'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum eveniet culpa nam fugiat beatae asperiores nemo impedit error suscipit aspernatur reprehenderit sit laborum nostrum doloribus illum, rem, commodi, facere quasi?
            </p>

        </div>
    </div>
    )
}

export default TaskList
