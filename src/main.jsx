// import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './styles/sidebar-style.css';

//routes
import Dashboard from './routes/Dashboard.jsx';
import Enroll from './routes/Enroll';
import Account from './routes/Account';
import Classroom from './routes/Classroom';
import ViewInfo from './routes/ViewInfo';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard/>,
    },
    {
        path: '/enroll',
        element: <Enroll/>,
    },
    {
        path: '/view_info',
        element: <ViewInfo/>,
    },
    {
        path: '/classroom',
        element: <Classroom/>,
    },
    {
        path: '/account',
        element: <Account/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <div className='pages'>
            <RouterProvider router={router} />
        </div>
    </>
    
)
