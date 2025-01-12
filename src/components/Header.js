import React from 'react'
import Logo from "../assets/logo.png"

const Header = () => {
  return (
    <header>
      

      
      <img src={Logo}  className="logo" alt=''></img>
      <a href='/'>Home</a>
    </header>
    
  )
}

export default Header
