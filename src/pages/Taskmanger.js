import React, { useState ,useEffect } from 'react'
import TaskCard from '../components/task/Taskcard'
import Taskfrom from '../components/task/Taskform'
import Tasklist from '../components/task/Tasklist'
import '../accsets/Task.css'
const Taskmanger = ({Tuser}) => {
const tasklist = localStorage.getItem("task")
const [ Taskdata,setTaskdata]= useState(   tasklist ? JSON.parse(tasklist) :  [])

const addTask = (task)=>{
  setTaskdata((pre)=>    [...pre,task])
 

  console.log("taskdata",Taskdata)
  

}
 useEffect(() => {
    localStorage.setItem("task", JSON.stringify(Taskdata))
  }, [Taskdata])



   const toggleTask = (index) => {
  // 1. Pehle purani state ki ek copy banayein
  const updatedTasks = [...Taskdata];

  // 2. Us specific index wale task ki 'completed' property ko ulta (toggle) kar dein
  // Agar false hai toh true, true hai toh false
  updatedTasks[index] = {
    ...updatedTasks[index],
    completed: !updatedTasks[index].completed
  };

  // 3. State update karein
  setTaskdata(updatedTasks);
};






  const DelUserinfo = (index) =>{
    const Updateduserlist = [...Taskdata]
    Updateduserlist.splice(index,1)
   setTaskdata(Updateduserlist)
  }

  return (
     <>

      <div className="tm-root">
        <div className="tm-card">

<TaskCard   Taskdata={Taskdata}     />
          <div className="tm-tabs">
            <div className="tm-tab active">All ({Taskdata.length})</div>
            <div className="tm-tab">Pending ({Taskdata.filter(task => !task.cheacked).length})</div>
            <div className="tm-tab">Done ({Taskdata.filter(task => task.cheacked).length})</div>
          </div>

          <div className="tm-body">
<Taskfrom  addTask ={addTask}   Tuser ={Tuser}     />

            <div>
<Tasklist     toggleTask={toggleTask}       Taskdata = {Taskdata}  DelUserinfo = {DelUserinfo}  />

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Taskmanger