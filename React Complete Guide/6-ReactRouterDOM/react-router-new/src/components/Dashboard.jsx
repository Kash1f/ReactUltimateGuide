import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('/')
  // }

  return (
    <>
    <div>
   <h3>Dashboard Page</h3>

   <Outlet/>
   </div>
   </>
  )
}

export default Dashboard;
