import React from 'react'
import Unauthorized from '../pages/Unauthorized';
import Login from '../pages/Login';
import User from '../pages/User';
import Admin from '../pages/Admin';
import ProtectedRoutes from './protectedroutes';

const router = createBrowserRouter([
{
    path: '/',
    element: <ProtectedRoutes element={<Admin />} />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'unauthorized',
        element: <Unauthorized />
      },
      {
        path: 'user',
        element: <User />
      }
]}
    ]);
export default router;