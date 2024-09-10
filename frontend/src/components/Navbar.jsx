import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
<nav className='nav'>
    <div className='logobox'><img className='logo' src = "../logo.png"/></div>
    <div className='linkBox'>
        <ul className='linkList'>
            <li className='link'><NavLink className='navlink' to="/">Home</NavLink></li>
            <li className='link'><NavLink className='navlink' to="/dashboard">My URLs</NavLink></li>
            <li className='link'><NavLink className='navlink' to="/features">Features</NavLink></li>
            <li className='link'><NavLink className='navlink' to="/help">Support/Help</NavLink></li>
            <li className='link'><NavLink className='navlink' to="/about">About</NavLink></li>
        </ul>
    </div>
</nav>
  )
}

export default Navbar