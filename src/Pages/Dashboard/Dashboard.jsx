import React from 'react'
import "./dashboard.css";
import logo from "../../assets/logo.png"

const Dashboard = () => {
  return (
    <div>
        <div className="nav">
            <img src={logo} alt="" />
        </div>
        <div className="dashboard">
            <div className="dashboard-content">
                <div className="side">
                    <h1>John Doe</h1>
                    <p>ABN Number: 213546</p>
                </div>

                <div className="status">
                    <p>Reason for Rejection stated here</p>
                </div>

                <div className="dash-grid">
                    <div className="dash-left">
                        <input type="text" placeholder='Email' disabled />
                        <input type="text" placeholder='Phone No' disabled />
                        <input type="text" placeholder='Suburb' disabled />
                        <input type="text" placeholder='City' disabled />
                    </div>

                    <div className="dash-right">
                        <input type="text" placeholder='Vehicle Type' disabled />
                        <input type="text" placeholder='Vehicle Make' disabled />
                        <input type="text" placeholder='Vehicle Model' disabled />
                        <input type="text" placeholder='Vehicle Year' disabled />
                    </div>
                </div>

                <p className='title'>APPLICATION</p>
                <textarea name="" rows={10} placeholder='Answer' disabled />
                <textarea name="" rows={10} placeholder='Answer' disabled />

                <p className='title'>PARTY PREFERENCES</p>
                <textarea name="" rows={10} placeholder='Answer' disabled />
                <textarea name="" rows={10} placeholder='Answer' disabled />

                <p className='title'>LAST DANCE MOVE</p>
                <textarea name="" rows={10} placeholder='Answer' disabled />
                
            </div>
        </div>
    </div>
  )
}

export default Dashboard