import React, { useEffect, useState } from 'react'
import NewUser from '../components/user/Nawuser'
import Userfound from '../components/user/Userfound'
import Userlist from '../components/user/Userlist'
import Quickdtate from '../components/user/Quickdtate'
import '../accsets/user.css'
import     '../accsets/navbar.css'

import Navigation from '../components/Navigation/Navigation'



const Userlistpage = ({ adduser }) => {
  const saveuser = localStorage.getItem("users")

  const [user, setuser] = useState(saveuser ? JSON.parse(saveuser) : [])
  console.log("user", user)
  const [search, setsearch] = useState("")
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'Developer',
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(user))
  }, [user])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if(formData.fullName && formData.email && formData.role)
  //     setuser([...user,formData])
  //   setFormData({fullName:"", email:"", role: "Developer"})
  //   adduser(user.fullName)
  //   console.log("username" ,user.fullName)


  // }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.fullName && formData.email && formData.role) {
      const newUser = { ...formData };

      // Update local list
      setuser([...user, newUser]);

      // Notify parent component if needed (Fixed the undefined bug here)
      if (adduser) adduser(newUser.fullName);
      // console.log("useradd" ,newUser.fullName)

      // Reset form
      setFormData({ fullName: "", email: "", role: "Developer" });
    }
  };





  const DelUser = (index) => {
    const updateduserlist = [...user]
    updateduserlist.splice(index, 1)
    setuser(updateduserlist)
  }

  const filterdata = user.filter((element) => {
    // Convert everything to lowercase safely
    const name = element.fullName ? element.fullName.toLowerCase() : "";
    const email = element.email ? element.email.toLowerCase() : "";
    const searchTerm = search.toLowerCase();

    return name.includes(searchTerm) || email.includes(searchTerm);
  });
  const rolecount = {
    Developer: 0,
    Designer: 0,
    Manager: 0,
    Tester: 0
  }
  user.forEach(element => {
    if (element.role != undefined) {
      rolecount[element.role]++;
    }
  });
  return (
    <>
           
      <div className=' user-man      '>
        <div className='user-1'>
        
          <Navigation/>
        

        <div className='user-name'>
          <div className='m-6 ml-30     '>
          <h2 className='text-lg text-white '>User Management</h2>
          <span className=' tuser-0    inline-block m-3 text-slate-400'>Total {user.length} {user.length === 1 ? 'user' : 'users'}</span>
        </div>
        <div className=' ml-20  mb-32 userlist1' ><Userlist search={search} setsearch={setsearch} /></div>
        <div className='con-1'>
         <div className='new5'>
           <div className='  ml-20 m-2'><NewUser formData={formData} setFormData={setFormData} handleChange={handleChange} handleSubmit={handleSubmit} /> </div>
          <div className='   ml-20  top-1  m-4 p-4 left-95   '> <Quickdtate count={rolecount} /></div>
       
         </div>

        <div className=' ml-20 '>
          <Userfound DelUser={DelUser} user={filterdata} />
         
        </div>
        </div>
        </div>
        </div>
      </div>

    </>
  )
}

export default Userlistpage