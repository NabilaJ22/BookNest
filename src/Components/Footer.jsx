import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <footer className="additional-info">
    <p>Join thousands of readers who trust BookNest to enhance their reading journey.</p>
    <div className="links">
     <NavLink to='/'>
        Home
     </NavLink>
    </div>

  </footer>
  </div>
  )
}

export default Footer