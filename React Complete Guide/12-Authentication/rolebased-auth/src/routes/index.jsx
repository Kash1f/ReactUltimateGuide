import React from 'react'

const router = createBrowserRouter([
{
    path: '/',
    element: <App />,
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