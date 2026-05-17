import React from 'react'

const Toperformance = ({Taskdata}) => {


const highTasks = Taskdata.filter(item => item.priority === "High").length;
  const mediumTasks = Taskdata.filter(item => item.priority === "Medium").length;
  const lowTasks = Taskdata.filter(item => item.priority === "low").length; // 'low' small hai ya capital, check kar lein


  return (
    <div className='top-performer'>
      <div className='recent-taskhandle'>
        <div>
          <h1>recent Task</h1>

        </div>

         { Taskdata.map((item,index)=>{
          return(
        <div className='rec-task'>

          <div className='rectask-2'>
            <div className='task-1'></div>
            <div> <h4>{item.Description} </h4>
              <p>{item.UserName} - {item.priority}</p></div>
          </div>
          <div className='pending-sec'>{item.cheacked ? "Done" : "Pending"}</div>

        </div>
          )
        } )}



      </div>
      <div> <div className='top-task'>
        <h3>Top performance</h3>
        <div className='cpm-1task'>
          <div className='tasus-icon' >ps</div>
          <div>
            <h4>Priya singh </h4>
            <p>devloper</p>
            <p className='com-p'>Task completed</p>
          </div>
        </div>

      </div >
        <div className='top1-task'>
          <h2>Perity spilt</h2>
          <div className='t-card'>
             <div className='ft-card'>
            <h1>{highTasks}</h1>
            <p>High</p>
          </div>
            <div className='ft-card'>
              <h1>{mediumTasks}</h1>
              <p>Medium</p>
            </div>
            <div className='ft-card'>
              <h1>{lowTasks}</h1>
              <p>Low</p>
            </div></div>

        </div>
        </div>
    </div>
  )
}

export default Toperformance
