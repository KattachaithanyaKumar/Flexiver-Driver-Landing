import React from 'react'
import logo from "../../assets/logo.png";
import "./login.css"

import { useNavigate } from 'react-router-dom';

const DriverLogin = () => {
    const navigate = useNavigate();

  return (
    <div className='login-page'>
        <div className="login-box">
            <img src={logo} alt="logo" />
            <div className="login-inputs">
                <input type="text" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button onClick={() => {
                    navigate("/dashboard")
                }}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default DriverLogin