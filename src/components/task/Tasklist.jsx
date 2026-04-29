import React from 'react'

const Tasklist = ({Taskdata,DelUserinfo,toggleTask}) => {
  return (

    <>
    
    
              <div className="tm-tasks-count">{Taskdata.length}3 tasks shown</div>
           { Taskdata.map((item,index)=>{
            return  <div className="tm-task-card border-red">
                <div className="tm-task-top">
                  <div className="tm-task-left">
                 <input type="checkbox" className="tm-checkbox"
                  checked={item.cheacked || false}

                  onChange={() => toggleTask(index)} 
                  />
                    <div className={`tm-task-name ${item.cheacked ? 'strikethrough' : ''}`}>{item.tittle}</div>
                  </div>
                  <div className="tm-delete-btn" onClick={()=> DelUserinfo(index)}>Delete</div>
                </div>
                <div className="tm-task-desc">{item. Description}</div>
                <div className="tm-task-meta">
                  <span className= {`tm-badge ${item.priority === "High"
                    ? "badge-high"
                    :item.priority ==="Medium"
                    ?"badge-medium":"badge-low"
                  }`}>{item.priority}</span>
                  <div className="tm-avatar avatar-rv">{item. UserName.substring(0,2)}</div>
                  <span className="tm-meta-name">{item. UserName}</span>
                  <span className="tm-meta-date overdue">Overdue: {item.datainput}</span>
                  <span className= {`tm-status-badge ${item.cheacked ? 'status-done' : 'status-pending'}`}>{item.cheacked ? "Done" : "Pending"}</span>
                </div>
                         </div>
} )}
    </>
  )
}

export default Tasklist