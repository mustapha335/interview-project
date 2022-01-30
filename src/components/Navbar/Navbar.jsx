import React from 'react'
import './navbar.css'
import Logo from '../../images/spaceX.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="about" src={Logo} alt="logo" />
    </div>
  )
}

export default Navbar
