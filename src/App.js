import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import { useState , useEffect } from 'react'
import AddTask from "./components/AddTask";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";


function App() {
  useEffect(()=>{ // use effect call function just as soon as code is loaded
  const getTasks = async() =>{   
    const getServer = await fetchTasks()   // fetches data which is brought by fetchTasks function
    setTasks(getServer); // changes state of tasks to the data brought by fetchTasks
  }
  getTasks()
},[])
  const fetchTasks = async()=>{
    const res = await fetch ("http://localhost:5000/tasks") //fetches all data from json server
    const data =  await res.json() // waits for promise to be fulfilled and converts it from json to js object
    return data // returns all the data in the json server
    }
  const fetchTask = async (id) => {// same as fetch tasks but fetches record of a single task
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
  
    return data
  }

  const [showAddTask,setShowAddTask]= useState(false) // state used for toggle button
  const [tasks,setTasks] = useState([])// state used to iniate tasks
  const addTask = async (task) => {  //adds task to json server 
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }
   const deleteTask = async(id) =>{
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:"DELETE"
    })

    setTasks(tasks.filter((Element)=>(Element.id !== id)))
   }
   const toggleReminder = async(id) =>{
    const res = await fetchTask(id)
    const updTask = {...res,reminder:!res.reminder}
    const res1 = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })
    const data = res1.json()

    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
   }

   const showAdd = () =>{
    setShowAddTask(!showAddTask)
   }
  return (
    <Router>
    <div className="container">
      
      
      
        <Header showAdd = {showAdd} showAddTask = {showAddTask}/>
        
      <Routes>
        <Route exact path="/" element={<>{showAddTask?<AddTask onAdd = {addTask}/>:""}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder} /> : "No tasks to show"}</>}/>
        <Route path="/about" element={<About/>}/></Routes>
      <Footer/>
      

      
      
      
      
      
      
      
      
    </div>
    </Router>
  );
}


export default App;
