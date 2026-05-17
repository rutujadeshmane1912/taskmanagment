import React from 'react'

const Quickdtate = ({count}) => {
  return (
  <>
  
  <div className=" w-[21rem]    quackdata-1  ml-10  text-white rounded-lg  border  mb-1 shadow-xl text-white-600 p-6 bg-slate-900 border-gray-400 ">

    <h6  className='m-1 font-semibold'> Quick status</h6>
    <div className='  quackdata-2   flex justify-between  m-2'>
        <span>DEvloper</span>
        <h7 className="text-indigo-500 ">{count.Developer}</h7>
    </div><hr className='m-2'/>
    <div className=' quackdata-2  flex  justify-between m-2' >
        <span>DEsginer</span>
        <h7 className="text-indigo-500 ">{count.Designer}</h7>
    </div><hr className='m-2' />
    <div className='  quackdata-2  flex  justify-between m-2'> 
        <span>Tester</span>
        <h7 className="text-indigo-500 ">{count.Tester}</h7>
    </div><hr className='m-2'/>    
    <div className=' quackdata-2  flex  justify-between m-3'>
        <span>Manager</span>
        <h7 className="text-indigo-500 p-4  ">{count.Manager}</h7>
    </div><hr className='m-2'/>
  </div>
  
  
  </>
  )
}

export default Quickdtate