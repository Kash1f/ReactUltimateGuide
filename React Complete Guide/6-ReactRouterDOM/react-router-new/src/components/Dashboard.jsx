import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }

  return (
    <>
   <h3>Dashboard Page</h3>
   <button onClick={handleClick}>Go back to Page </button>
   <Outlet/>
   </>
  )
}

export default Dashboard
