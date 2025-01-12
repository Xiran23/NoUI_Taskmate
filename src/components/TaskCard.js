import React from 'react'


function TaskCard({task,handleDelete,info}) {
    return (
      <li key={task.id} className={task.completed ? "completed task-item" : "notcompleted task-item"}>
        <p>Prop Drilling2 :{info}</p>
      <span class="task-id">{task.id}</span>
      <span class="task-name">{task.name}</span>
      <span class="task-status">
          {task.completed ? "Completed" : "Not_Completed"}
      </span>
      <button class="delete-btn" onClick={() => handleDelete(task.id)}>Delete</button>
  </li>
    )
  }

// function TaskCard(props) {
//   return (
//     <li key={props.task.id} className={props.task.completed ? "completed task-item" : "notcompleted task-item"}>
//     <span class="task-id">{props.task.id}</span>
//     <span class="task-name">{props.task.name}</span>
//     <span class="task-status">
//         {props.task.completed ? "Completed" : "Not_Completed"}
//     </span>
//     <button class="delete-btn" onClick={() => props.handleDelete(props.task.id)}>Delete</button>
// </li>
//   )
// }

export default TaskCard
