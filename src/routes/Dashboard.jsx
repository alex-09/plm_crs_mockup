import { NavLink, Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import '../styles/index.css';
import {AiOutlineDown} from "react-icons/ai";

import SchoolCalendar from "../components/SchoolCalendar.jsx";

export default function Dashboard () {

    // Change the data here (needed: array of obects)
    // array of objects for scheduled events
    const scheduledEvents = [
        {
            eventName : 'Teacher\'s Day',
            eventDetail: "Join us in celebrating Teacher's Day as we express our gratitude and appreciation for the dedicated educators who shape our future.",
            date: new Date(2023, 10, 1),
        },
        {
            eventName : 'Heroes\' Day',
            eventDetail: "Be a part of Heroes' Day as we honor and commemorate the bravery and sacrifices of individuals who have exemplified courage and selflessness in service to others",
            date: new Date(2023, 10, 15),
        },
        {
            eventName : 'Valentines\' Day',
            eventDetail: "Embrace the spirit of love and friendship by participating in our Valentine's Day event, where we celebrate the joy of connections and relationships in a warm and festive atmosphere.",
            date: new Date(2023, 10, 23),
        },
    ]

    var scheduledDates = scheduledEvents.map((item)=> (
        item.date
    ));

    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

    return (
    <>
        <Outlet/>
        <SideBar/>
        <main>
            <div className="divide-y divide-slate-500 flex flex-col items-center justify-center z-50 mb-10">
                <h1 className="font-sans text-3xl font-bold text-plm-gold mt-10 mb-5">DASHBOARD</h1>

                <div className="justify-center w-full p-5">
                    <div className="grid grid-cols-3 gap-10 w-full justify-start">
                        <div className="col-span-2 bg-red grid grid-rows-none justify-start content-start">
                            <h1 className="font-bold font-sans mb-2">Events</h1>

                            {
                                scheduledEvents.map((item) => (
                                    <div key={item.eventName} className="grid grid-cols-4 gap-4 p-4 bg-white rounded-xl mb-4">

                                        {/* content start */}
                                        <div className="w-52 h-20 bg-plm-gold p-3 text-white text-center rounded-xl">
                                            <h1 className="font-bold font-sans mb-2">{item.date.toLocaleDateString('en-us', options)}</h1>
                                            <p>10:00 am</p>
                                        </div>
        
                                        <div className="h-20 col-span-3">
                                            <h1 className="font-bold font-sans mb-2">{item.eventName}</h1>
                                            <p className="line-clamp-2">{item.eventDetail}</p>
                                        </div>
                                        {/* content end */}
                                        
                                    </div>
                                ))
                            }
                            
                            <div className="flex justify-end items-end content-end">
                                <NavLink >
                                    <div className="flex items-center gap-2">
                                        <a href="#" className="font-bold">See More</a>
                                        <AiOutlineDown/>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="bg-blue grid grid-rows-none content-start">
                        
                            <h1 className="font-bold font-sans mb-2">Calendar</h1>
                            <div className="flex p-4 bg-white rounded-xl items-center justify-center">
                                    <SchoolCalendar selectedDates={scheduledDates}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="justify-center w-full  p-5">
                    <div className="justify-start">
                        <h1 className="font-bold font-sans mb-2">CLEARANCE</h1>
                        <table className="border table-fixed w-full shadow-md">
                            <thead className="bg-slate-200">
                                <tr>
                                    <th>Source</th>
                                    <th>Remarks</th>
                                    <th>Waive Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr>
                                    <td className="text-center">Deficiencies</td>
                                    <td className="text-center">Remarks</td>
                                    <td className="text-center">10/25/2023</td>
                                    <td className="text-center">CLEARED</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}
            </div>

            {/* Change into a background */}
            {/* <div className="absolute bottom-0 right-0 z-0">
                <img
                src={watermark_plm}
                alt="Fixed Image"
                className="w-52 h-auto "
                />
            </div> */}
        </main>
    </>
    );
}
