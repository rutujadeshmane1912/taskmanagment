import React from 'react'
import Dashcard from '../components/Dashbord/Dashcard'
import '../accsets/Dashbord.css'
import Progress from '../components/Dashbord/Progress'
import Toperformance from '../components/Dashbord/Toperformance'
import Navigation from '../components/Navigation/Navigation'
import     '../accsets/navbar.css'
const Dashbord = ({ Dash, Taskdata }) => {
  return (
   <div className='Dashbord-container'>
    <div className='dash-nav'><Navigation/></div>
     <div className='Dashbord' >
      <Dashcard  Dash={Dash }  Taskdata={Taskdata}  />
      <Progress  Taskdata={Taskdata}  />
    <Toperformance  Taskdata={Taskdata}  />
    </div>
   </div>
  )
}

export default Dashbord
