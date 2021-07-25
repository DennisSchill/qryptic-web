import React from 'react'
import './Logo.css'
import logo from '../../coinshark-logo.png';


const Logo = () => {
  return(
    <div className="Logo">
      <img src={logo} height="30"/>
    </div>
    )
}

export default Logo