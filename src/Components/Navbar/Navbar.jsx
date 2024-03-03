import React from 'react'
import "./navbar.css"

import Logo from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='navbar'>
        <div className="navbar-container">
            <a href="#hero">
              <img src={Logo} alt="logo" className='logo' />   
            </a>
            <div className="navbar-links">
                <a href="#about">About us</a>
                <a href="#service">Services</a>
                <a href="#available">Available vehicles</a>
            </div>
            <div className="navbar-actions">
                <button onClick={() => {
                    navigate('/register')
                }}>Apply to drive</button>
                <a href="">Login</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar