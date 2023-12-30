import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RouterExample = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterExample
