import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('/')
  // }

  return (
    <>
    <div>
   <h3>Dashboard Page</h3>
   <ul>
      <li>
        <Link
          to="courses"
          className={({isActive}) => isActive ? "active-link" : ""}>
              Courses
        </Link>
      </li>
      <li>
        <Link
          to="reports"
          className={({isActive}) => isActive ? "active-link" : ""}>
          Reports
        </Link>
      </li>
      <li>
        <Link
          to="mock-tests"
          className={({isActive}) => isActive ? "active-link" : ""}>
          MockTests
        </Link>
      </li>
    </ul>

   <Outlet/>
   </div>
   </>
  )
}

export default Dashboard;

