import logo from './logo.svg';
import './App.css';

import Userlistpage from './pages/Userlistpage';

import Taskmanger from './pages/Taskmanger';
import { useState ,useEffect} from 'react';
import Dashbord from './pages/Dashbord';
import Lastdashbord from './pages/Lastdashbord';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {

  const [Tuser,setTuser] = useState([]);
     const [Dash,setdash] = useState([]);
      //  const [check,setcheck] = useState([]);
     console.log("dash",Dash)



     const tasklist = localStorage.getItem("task")
     const [ Taskdata,setTaskdata]= useState(   tasklist ? JSON.parse(tasklist) :  [])
// console.log("userfull",Tuser)
  const adduser =(user)=>{
setTuser((prev)=>[...prev,user])
  }
  console.log("Taskdata",Taskdata)
// console.log(" tuser",Tuser)
// console.log( "   add user data"   ,adduser)

useEffect(() => {
    localStorage.setItem("task", JSON.stringify(Taskdata))
  }, [Taskdata])

const dsahadduser =(user)=>{
setdash((prev)=>[...prev,user])

  }

//   const complete =(user)=>{
// setcheck((prev)=>[...prev,user])

//   }
//   console.log("check",check)




  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route   path='/'  element={<Userlistpage     adduser= {adduser} />}    />
    <Route path='/task' element={<Taskmanger Tuser = {Tuser}  dsahadduser={dsahadduser}     Taskdata={Taskdata} setTaskdata={setTaskdata} />}/>
    <Route  path='/dash'  element={ <Dashbord  Dash={Dash}  Taskdata={Taskdata}    />}  />
    <Route path='/last' element={ <Lastdashbord  Taskdata={Taskdata} />}/>
   </Routes>
   </BrowserRouter>
   
    {/* <Userlistpage     adduser= {adduser} />
   <Taskmanger Tuser = {Tuser}  dsahadduser={dsahadduser}     Taskdata={Taskdata} setTaskdata={setTaskdata} />
   <Dashbord  Dash={Dash}  Taskdata={Taskdata}    /> 
   <Lastdashbord  Taskdata={Taskdata} /> */}
 
    </>
  );
}

export default App;