// import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './style.scss';

//routes
import App from './App.jsx';
import Enroll from './routes/Enroll';
import Account from './routes/Account';
import Classroom from './routes/Classroom';
import ViewInfo from './routes/ViewInfo';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
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
        <div className='App'>
            <RouterProvider router={router} />
        </div>
    </>
    
)
