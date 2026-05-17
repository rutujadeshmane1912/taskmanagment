import React from 'react'

import '../accsets/Lastdash.css'
import Lastdshcard from '../components/lastdash/Lastdshcard'
import Navigation from '../components/Navigation/Navigation'
const Lastdashbord = ({Taskdata}) => {
  return (
   <>
<div className='last-root'>
  <div>
     <Navigation/>
  </div>
  <div className='last-root1'>
    <Lastdshcard  Taskdata={Taskdata} />
  </div>
</div>
   
   </>
  )
}

export default Lastdashbord
