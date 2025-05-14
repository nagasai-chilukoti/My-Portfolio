import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  // const { user, logout } = useAuth();

  const navlinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      fontWeight: isActive ? "bold" : "normal",
      
    };
  };
  return (
    <div>
      <nav className='primary-nav'>
        <NavLink style={navlinkStyles} to='/'>Home</NavLink>
        {/* <NavLink style={navlinkStyles}  to='/About'>About</NavLink> */}
        <NavLink style={navlinkStyles} to='/Projects'>Projects</NavLink>
        <NavLink style={navlinkStyles} to='/Experience'>Experience</NavLink>
        <NavLink style={navlinkStyles} to='/Contact'>Contact</NavLink>
      </nav>      
      
    </div>
  )
}

export default Navbar