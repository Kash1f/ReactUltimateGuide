import React from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default layout