import logo from './logo.svg';
import './App.css';

import Userlistpage from './pages/Userlistpage';

import Taskmanger from './pages/Taskmanger';
import { useState } from 'react';


function App() {

  const [Tuser,setTuser] = useState([]);

// console.log("userfull",Tuser)
  const adduser =(user)=>{
setTuser((prev)=>[...prev,user])
  }
// console.log(" tuser",Tuser)
// console.log( "   add user data"   ,adduser)

  return (
    <>
  
   
   <Userlistpage     adduser= {adduser} />
   <Taskmanger Tuser = {Tuser} />
 
    </>
  );
}

export default App;