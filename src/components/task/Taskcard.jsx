import React from 'react'

const TaskCard = ({Taskdata, }) => {

const completedCount = Taskdata.filter(task => task.cheacked === true).length;
const pendingCount = Taskdata.length - completedCount;
const progressPercent = Taskdata.length > 0 
    ? Math.round((completedCount / Taskdata.length) * 100) 
    : 0;
  return (

<>

          <div className="tm-header">
            <div className="tm-title">   {Taskdata.length} {Taskdata.length === 1 ? 'user' : 'users'} </div>
          </div>

          <div className="tm-stats">
            <div className="tm-stat">
              <div className="tm-stat-label">Total</div>
              <div className="tm-stat-value blue">   {Taskdata.length}  </div>
            </div>
            <div className="tm-stat">
              <div className="tm-stat-label">completed</div>
              <div className="tm-stat-value green">{completedCount}</div>
            </div>
            <div className="tm-stat">
              <div className="tm-stat-label">Pending</div>
              <div className="tm-stat-value amber">{pendingCount}</div>
            </div>
            <div className="tm-stat">
              <div className="tm-stat-label">{progressPercent}%</div>
              <div className="tm-stat-value blue">{progressPercent}%</div>
              <div className="tm-progress-bar-wrap">
                <div className="tm-progress-bar-fill" 
           style={{ width: `${progressPercent}%` }} />
              </div>
            </div>
          </div>
</>
)
}

export default TaskCard