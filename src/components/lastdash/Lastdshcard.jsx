import React from 'react'

const Lastdshcard = ({ Taskdata = [] }) => {







    // --- High Priority Logic ---
    const highTasks = Taskdata.filter(task => task.priority === "High");
    const totalHigh = highTasks.length;
    const completedHigh = highTasks.filter(task => task.cheacked === true).length;
    const highPercent = totalHigh > 0 ? Math.round((completedHigh / totalHigh) * 100) : 0;

    // --- Medium Priority Logic ---
    const mediumTasks = Taskdata.filter(task => task.priority === "Medium");
    const totalMedium = mediumTasks.length;
    const completedMedium = mediumTasks.filter(task => task.cheacked === true).length;
    const mediumPercent = totalMedium > 0 ? Math.round((completedMedium / totalMedium) * 100) : 0;

    // --- Low Priority Logic ---
    const lowTasks = Taskdata.filter(task => task.priority === "low"); // Aapne form me 'low' small rakha hai
    const totalLow = lowTasks.length;
    const completedLow = lowTasks.filter(task => task.cheacked === true).length;
    const lowPercent = totalLow > 0 ? Math.round((completedLow / totalLow) * 100) : 0;







    const totalTasks = Taskdata.length;
    const completedTasks = Taskdata.filter(task => task.cheacked === true).length;
    const pendingCount = totalTasks - completedTasks;
    const pengingrate = totalTasks > 0 ? Math.round((pendingCount / totalTasks) * 100) : 0;

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
                    <span>Real-time overview</span>
                </div>

                <button className='dash-but1'>

                </button>




            </div>

           
            <div className='dashcard-container'>
                <div className='dash-container'>
                    <div className="dashcard-icon">
                        <img src="user1.png" title="group icons" />
                        <img className='das-img2' src="uplode.png" title="group icons" />
                    </div>
                    <h1>{uniqueUsers || 0}</h1>
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
                        <img className='das-img2' src="cheakbox.png" title="group icons" />
                    </div>
                    <h1>{completedTasks}</h1>
                    <h3>completaid </h3>
                    <span>{completionRate}% complation rate </span>
                </div>
                <div className='dash-container'>
                    <div className="dashcard-icon">
                        <img src="user1.png" title="group icons" />
                        <img className='das-img2' src="uplode.png" title="group icons" />
                    </div>
                    <h1>{pendingCount}</h1>
                    <h3>Pending</h3>
                    <span>3 mood altration</span>
                </div>

            </div>






            <div className='last-pm'>
                <div className='last-pro'>
                    <div className=' p-bar1'>
                        <div className='pending-data'>
                            <p>completed Task</p>
                            <p>{completionRate} </p>
                        </div>
                        <div className='first-progress'>
                            <div className='bar1' style={{ width: `${completionRate}%` }}    ></div>
                        </div>
                    </div>
                    <div className=' p-bar2'>
                        <div className='pending-data'>
                            <p>pending task</p>

                        </div>
                        <div className='second-progress'>
                            <div className='bar2' style={{ width: `${pengingrate}%` }} ></div>
                        </div>
                    </div>
                



              
                    <div className=' high'>
                        <div className='pending-data'>
                            <p> High Priority</p>
                            <p>{completedHigh} / {totalHigh} - {highPercent}% </p>
                        </div>
                        <div className='high-progress'>
                            <div className='Hbar1' style={{ width: `${highPercent}%` }}  ></div>
                        </div>
                    </div>
                    <div className=' medium'>
                        <div className='pending-data'>
                            <p>Medium Periority</p>
                            <p>{completedMedium} / {totalMedium} - {mediumPercent}% </p>
                        </div>
                        <div className='medium-progress'>
                            <div className='Mbar2' style={{ width: `${mediumPercent}%` }}></div>
                        </div>
                    </div>
                    <div className=' low'>
                        <div className='pending-data'>
                            <p>low Periority</p>
                            <p>{completedLow} / {totalLow} - {lowPercent}% </p>
                        </div>
                        <div className='low-progress'>
                            <div className='Lbar3' style={{ width: `${lowPercent}%` }}></div>
                        </div>
                    
               

</div>





            </div>

            <div className='last-data'>
                {Taskdata.map((item, index) => {
                    return (
                        <div className='rec-task'>

                            <div className='rectask-2'>
                                <div className='task-1'></div>
                                <div> <h4>{item.Description} </h4>
                                    <p>{item.UserName} - {item.priority}</p></div>
                            </div>
                            <div className='pending-sec'>{item.cheacked ? "Done" : "Pending"}</div>

                        </div>
                    )
                })}
            </div>

            </div>


            <div className='lat-per'> <div >
                <h3>Top performance</h3>
                <div className='cpm-1task'>
                    <div className='tasus-icon' >ps</div>
                    <div>
                        <h4>Priya singh </h4>
                        <p>devloper</p>
                        <p className='com-p'>Task completed</p>
                    </div>
                </div>
            </div>
            </div>



        </>
    )
}

export default Lastdshcard
