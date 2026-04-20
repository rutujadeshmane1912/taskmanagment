import React, { useEffect, useState } from 'react'

const Userfound = ({user ,DelUser}) => {
  

//  const saved = ()=>{
//     let saveddata =[...formData,input]
//     console.log("savedddata",saveddata)
//     setusers(saveddata);
//     setinput("")
// console.log("savadata",saveddata)
//  }

//  {user.map((item, index) => {
//         // SAFETY CHECK: Ensure fullName exists or use an empty string
//         const name = item?.fullName || "Unknown";
//         const email = item?.email || "No email provided";
//         const role = item?.role || "No Role";

  return (
   <>
    <span className='ml-20 text-white'> {user.length} {user.length === 1 ? 'user' : 'users'} found</span>
      
   {user.map((item,index)=>{
    return (
   <div  className=' ml-20' key={index}>
   
    
    <div 
     className='flex   first-user   w-[550px] rounded-2xl  m-1 bg-slate-900 border-gray-400  border border-gray-700 shadow-xl bg-slate-900 border-gray-400 text-white w=[]'>
        <div className='w-[46px] ml-2 mt-6 p-2 bg-blue-500 h-[45px] rounded-full  user-circul text-center'
        >{item.fullName.substring(0,2)}</div>
        <div className='m-4  fond-user  '  ><h3>{item.fullName}</h3>
        <span>{item.email}</span>
        <div className='w-[80px] h-[30px] bg-blue-200  m-2    find-role  p-1 rounded-2xl text-black'>
            {item.role}</div>
        

        </div>
        <button  className="border     first-delet  text-white w-[80px]  h-[35px] border-gray-400 p-2 rounded-lg  mt-8 ml-50 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
        onClick={()=> DelUser(index)}
        >Delete</button>
    </div>    

 
     

   </div>
   )})}
   </>
  )
}

export default Userfound