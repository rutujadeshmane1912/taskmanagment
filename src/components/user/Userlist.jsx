import React from 'react'

const Userlist = ({search,setsearch}) => {
  return (
    <>
    
   
    <div><input 
    className="border text-white w-[1000px] h-[35px] border-gray-600 bg-slate-800 p-2 rounded-lg ml-10  focus:outline-none focus:ring-2 focus:ring-indigo-500"
    type='text' 
    value={search}
    onChange={(e)=>setsearch(e.target.value)}
    placeholder='search by name or email...'/> 
    </div>
    </>
  )
}

export default Userlist