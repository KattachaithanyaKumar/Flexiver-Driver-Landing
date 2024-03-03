import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LandingPage from './Pages/LandingPage/LandingPage'
import DriverRegistration from './Pages/Registration/DriverRegistration'
import DriverLogin from './Pages/Login/DriverLogin'
import Dashboard from './Pages/Dashboard/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<DriverRegistration />} />
        <Route path="/login" element={<DriverLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    )
}

export default App