import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <>
    
    <nav>
    <div className="logo">
      <img src="/image/logo.png" alt="Logo" />
        <h1>BookNest</h1>
    </div>

    <ul>
      <li> 
        <NavLink to='/'>
         Home  
        </NavLink>
        </li>
      <li> 
      <NavLink to='/booklist'>
         Booklist  
        </NavLink>
        </li>
     
    </ul>

    <div className="social_icon">
      <i className="fa-solid fa-magnifying-glass"></i>
      <i className="fa-solid fa-heart"></i>
    </div>
  </nav>
    
    </>
  )
}

export default Navbar