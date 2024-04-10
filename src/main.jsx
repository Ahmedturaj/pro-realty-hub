import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Layout/Root';
import Home from './pages/Home/Home';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile';
import Contact from './pages/Contact/Contact';
import AuthProvider from './Provider/AuthProvider/AuthProvider';
import SignIn from './Authentication/SignIn/SignIn';
import Register from './Authentication/Register/Register';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';
import EstateDetails from './pages/Home/Estate/EstateDetails';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/estate/:id',
        element:<PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,
        loader:()=>fetch('/estates.json')
      }
      ,
      {
        path: '/update',
        element: <PrivateRoutes>
          <UpdateProfile></UpdateProfile>
        </PrivateRoutes>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
