import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task,onDelete,onToggle}) => {
  return (
    <div className= {`task ${task.reminder === true ? "reminder":""}`} onDoubleClick={()=>onToggle(task.id)}>
      <h3>{task.text} <FaTimes style={{color: "red",cursor:"pointer"}} onClick={()=>onDelete(task.id)} /></h3>
      <p>{task.id}</p>
    </div>
  )
}

export default Task
