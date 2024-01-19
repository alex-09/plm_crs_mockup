// import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './styles/sidebar-style.css';
import './styles/index.css';

//routes
import Schedules from './routes/Schedules.jsx';
import StudentRecordsbySN from './routes/StudentRecordsbySN.jsx';
import StudentRecordsbyBI from './routes/StudentRecordsbyBI.jsx';
import Account from './routes/Account';
import PrintForms from './routes/PrintForms.jsx';
import Registration from './routes/Registration.jsx';
import Utilities from './routes/Utilities.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Schedules/>,
    },
    {
        path: '/studentrecordsbysn',
        element: <StudentRecordsbySN/>,
    },
    {
        path: '/studentrecordsbybi',
        element: <StudentRecordsbyBI/>,
    },
    {
        path: '/registration',
        element: <Registration/>,
    },
    {
        path: '/printforms',
        element: <PrintForms/>,
    },
    {
        path: '/utilities',
        element: <Utilities/>,
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
