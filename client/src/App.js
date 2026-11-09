import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './components/Home'
import Addexpense from './components/Addexpense'
import Editexpense from './components/Editexpense'
import Dashboard from './components/Dashboard'
import Editincome from './components/Editincome'
import Help from './components/Help'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addexpense" element={<Addexpense />} />
          <Route path="/editexpense/:id" element={<Editexpense />} />
          <Route path="/editincome/:id" element={<Editincome />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App