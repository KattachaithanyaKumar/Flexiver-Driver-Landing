import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LandingPage from './Pages/LandingPage/LandingPage'
import DriverRegistration from './Pages/Registration/DriverRegistration'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<DriverRegistration />} />
      </Routes>
    </BrowserRouter>
    )
}

export default App