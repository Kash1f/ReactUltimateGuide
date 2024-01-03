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

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterExample
