
import { Link, NavLink } from 'react-router-dom';
import React, { useState  } from 'react'
// my\src\accsets\navbar.css

const Navigation = () => {


  
  // 2. Ek state banayi jo decide karegi navbar dikhega ya nahi
  const [isOpen, setIsOpen] = useState(false);

  // 3. Click hone par state ko ulta (toggle) karne ka function
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div className={isOpen ? 'logo-img ' : ''}>
       <div className='nav_logo'  onClick={toggleNavbar} style={{ cursor: 'pointer', position: 'relative' }}>
       <img src='https://cdn-icons-png.flaticon.com/128/14440/14440507.png'/>
      </div>
      
      <ul className={isOpen ? 'nav_links active' : 'nav_links'}>
        <li className='pok'>
          <Link to="/">User</Link>
        </li>
        <li>
          <Link to="/task">Task</Link>
        </li>
        <li>
          <Link to="/dash">Dshbord</Link>
        </li>
        <li>
          <Link to="/last">lastdashbord</Link>
        </li>
        
        {/* Using NavLink is even better if you want an "active" class automatically added when on that page */}
        {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
      </ul>
    </div>
    
    </>
  )
}

export default Navigation
