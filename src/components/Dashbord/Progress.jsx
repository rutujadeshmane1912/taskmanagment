import React from 'react'

const Progress = ({ Taskdata = []  }) => {
    // const total = check.length;
    //     // Fixed typo: task.cheacked -> task.checked (ensure your data matches this)
    //     const completedCount = check.filter(task => task.checked === true).length;
    //     const progressPercent = total > 0 ? Math.round((completedCount / total) * 100) : 0;

const uniqueUsers = [...new Set(Taskdata.map(task => task.UserName))].filter(Boolean);

    const total = Taskdata.length;
    const completedCount = Taskdata.filter(task => task.cheacked === true).length;
    const progressPercent = total > 0 ? Math.round((completedCount / total) * 100) : 0;
    const pendingCount = total - completedCount;
    const pendingPercent = total > 0 ? Math.round((pendingCount / total) * 100) : 0;


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

    return (

        <>
            <div className='summary'>

                <div className='progress-overview'>
                    <h1>Progress ovreview</h1>
                    <h1>{progressPercent}%</h1>
                    <p>oveall complation</p>
                    <div>
                        <div className=' p-bar1'>
                            <div className='pending-data'>
                                <p>completed Task</p>
                                <p>{completedCount} / {total}- {progressPercent}% </p>
                            </div>
                            <div className='first-progress'>
                                <div className='bar1' style={{ width: `${progressPercent}%` }}    ></div>
                            </div>
                        </div>
                        <div className=' p-bar2'>
                            <div className='pending-data'>
                                <p>pending task</p>
                                <p>{pendingCount} / {total}- {pendingPercent}% </p>
                            </div>
                            <div className='second-progress'>
                                <div className='bar2' style={{ width: `${pendingPercent}%` }} ></div>
                            </div>
                        </div>
                    </div>
                    <div className='line'>

                    </div>
                    <h5>By periority</h5>
                    <div>
                        <div className=' high'>
                            <div className='pending-data'>
                                <p> High Priority</p>
                                <p>{completedHigh} / {totalHigh} - {highPercent}% </p>
                            </div>
                            <div className='high-progress'>
                                <div className='Hbar1'  style={{ width: `${highPercent}%` }}  ></div>
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


                </div>
                <div className='user-summary' >
                    <h1>User Task summary</h1>
   {uniqueUsers.map((user, index) => {
                        // Har user ke liye tasks filter karein
                        const userTasks = Taskdata.filter(task => task.UserName === user);
                        const userTotal = userTasks.length;
                        const userCompleted = userTasks.filter(task => task.cheacked === true).length;
                        const userPercent = userTotal > 0 ? Math.round((userCompleted / userTotal) * 100) : 0;


                        return (
                    <div className='smmary-uaer1'>
                        <div className='user-sm-ico'>{user.substring(0, 2).toUpperCase()}</div>
                        <div className='sm-user'>
                            <div className='user-task-summary'>

                                <div>{user} </div>
                                <div>{userTotal} Tasks</div>

                            </div>
                            <div>
                                <div className='p-progress'>
                                    <div className='pbar1'style={{ width: `${userPercent}%` }} ></div>
                                </div>
                            </div>
                            <div className='gp-smary'>
                                <span>{userCompleted}</span>
                                <span>{userTotal}</span>
                                <span>{userPercent}%</span>
                            </div>
                        </div>
                    </div>
                     );
                    })}
                </div>
            </div>
           
        </>


    )
}

export default Progress
