
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Error from './pages/Error'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/registration' element={<Registration/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='*' element={<Error/>} />          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App