import React from 'react'
import Task from './Task'

const Tasks = ({tasks,onDelete,onToggle}) => {
  
  return (
    
    <>
        
      {tasks.map((Element,index)=>(
            
            <Task key={index} task={Element} onDelete = {onDelete} onToggle={onToggle}/>    
        ))}
    </>
  )
}

export default Tasks
