import React from 'react'


   
const Dashcard = ({ Dash ,Taskdata = []}) => {
const totalTasks = Taskdata.length;
    const completedTasks = Taskdata.filter(task => task.cheacked === true).length;
    const pendingCount = totalTasks - completedTasks;
    
    // Completion rate percentage
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    // Unique users calculation (agar task mein 'user' field hai toh)
    const uniqueUsers = [...new Set(Taskdata.map(task => task.UserName))].length;
    const highPriorityCount = Taskdata.filter(task => task.priority === "High").length;

    return (

        <>

            <div className='dashcard'>
                <div className='dashcard-heading'>
                    <h2>Dashbord</h2>
                    <span>Taskflow Admine -live overview</span>
                </div>
 
                    <button className='dash-but1'>
                    {Dash}
                </button>
              
                


            </div>

            <div className='dsah-but2'>
                <button> +Add Task</button>
                <button> Complete random</button>
                <button> Reset</button>
               <span> + Try these to see derived states updated live</span>
            </div>
            <div className='dashcard-container'>
                <div className='dash-container'>
                    <div className="dashcard-icon">
                        <img src="user1.png" title="group icons" />
                        <img className='das-img2' src="uplode.png" title="group icons" />
                    </div>
                    <h1>{uniqueUsers || 0 }</h1>
                    <h3>TOtal user</h3>
                    <span>Active member </span>
                </div>
                <div className='dash-container'>
                    <div className="dashcard-icon">
                        <img src="user1.png" title="group icons" />
                        <img className='das-img2' src="task.png" title="group icons" />
                    </div>
                    <h1>{totalTasks}</h1>
                    <h3>TOtal Tasks</h3>
                    <span> {highPriorityCount} High priority </span>
                </div>
                <div className='dash-container'>
                    <div className="dashcard-icon">
                        <img src="user1.png" title="group icons" />
                        <img className='das-img2'  src="cheakbox.png" title="group icons" />
                    </div>
                    <h1>{completedTasks}</h1>
                    <h3>completaid </h3>
                    <span>{completionRate}% complation rate </span>
                </div>
                <div className='dash-container'>
                    <div className="dashcard-icon">
                        <img src="user1.png" title="group icons" />
                        <img  className='das-img2' src="uplode.png" title="group icons" />
                    </div>
                    <h1>{pendingCount}</h1>
                    <h3>Pending</h3>
                    <span>3 mood altration</span>
                </div>

            </div>


        </>




    )
}

export default Dashcard
