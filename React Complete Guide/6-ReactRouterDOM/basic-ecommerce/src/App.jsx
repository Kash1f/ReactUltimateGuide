import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Prorducts from './pages/Prorducts'

const App = () => {
  return (
    <>
      <BrowserRouter>


      



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={Prorducts} />
      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
