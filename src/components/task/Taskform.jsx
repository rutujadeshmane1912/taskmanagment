import React, { useState } from 'react'

const Taskfrom = ({Tuser,addTask ,dsahadduser,complete}) => {



  const [tfd, setTfd]=useState({
  tittle:"",
  Description:"",
  UserName:"",
  datainput:"",
  priority:"",
  cheacked:false

  })
    const handlesub =(e)=>{
   e.preventDefault()
    addTask(tfd)
    if(dsahadduser) dsahadduser(tfd.datainput)

     
    setTfd({
        tittle:"",
  Description:"",
  UserName:"",
  datainput:"",
  priority:"",
  cheacked:false

    })
    }




  const handleuserchange = (e)=>{
   const {name ,value} = e.target
  setTfd((pre)=>({
   ...pre,
   [name]:value
  }))
  }
  return (

    <>
    
            <form className="tm-form-panel" onSubmit={handlesub}>
              <div className="tm-form-title">New Task</div>
              <input className="tm-input" name='tittle' value={tfd.tittle}   placeholder="Task title " onChange={ handleuserchange}  />
              <textarea className="tm-input tm-textarea"    name='Description' value={tfd.Description} onChange={ handleuserchange}  placeholder="Description (optional)"  />
              <select className="tm-select"   name='UserName' value={tfd.UserName} onChange={ handleuserchange} >
                 <option  value="">-- Assign to User --</option>
                {Tuser.map((item,index)=>{
                return  ( <option key={index} value={item}> {item}</option>)
}               )}
               
              </select>
              <div className="tm-priority-label" >Priority:</div>
              <div className="tm-priority-group">
                <div className={`tm-priority-btn ${tfd.priority==="low" ? "selected" : ""}`} onClick={() => setTfd((prev) => ({ ...prev, priority: "low" }))}>Low</div>
                <div className={`tm-priority-btn ${tfd.priority==="Medium" ? "selected" : ""}`} onClick={() => setTfd((prev) => ({ ...prev, priority: "Medium" }))}>Medium</div>
                <div className={`tm-priority-btn ${tfd.priority==="High" ? "selected" : ""}`} onClick={() => setTfd((prev) => ({ ...prev, priority: "High" }))}>High</div>
              </div>
              <input className="tm-date-input" name='datainput'   value={tfd.datainput}  onChange={handleuserchange} type="date" placeholder="dd-mm-yyyy"  />
              <button className="tm-add-btn" type='submit'>+ Add Task</button>
            </form>
    
    </>
  )
}

export default Taskfrom