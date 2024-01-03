import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


const RouterExample = () => {


  return (
    <>
      <BrowserRouter>
      
      <Navbar/>
        <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='*' element={<div>Error 404</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterExample
