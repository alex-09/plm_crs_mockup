import { Outlet } from "react-router-dom";
import Select from "react-select";
import SideBar from "../SideBar";
import watermark_plm from "../assets/watermark_plm.png";

const roomOptions = [
  { value: "room1", label: "Room 1" },
  { value: "room2", label: "Room 2" },
  // Add more room options as needed
];

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const generateTimeSlots = () => {
  const timeSlots = [];
  let currentTime = new Date(2022, 0, 1, 7, 0); // Starting from 7:00 AM

  while (currentTime.getHours() < 18) { // Assuming the schedule ends at 6:00 PM
    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timeSlots.push(formattedTime);
    currentTime.setMinutes(currentTime.getMinutes() + 30); // Increment by 30 minutes
  }

  return timeSlots;
};

const ScheduleTable = () => {
  const timeSlots = generateTimeSlots();

  return (
    <div className="mt-6">
      <h2 className="font-sans text-2xl font-bold text-plm-gold mb-4">
        Room Schedule
      </h2>
      <table className="min-w-full divide-y divide-slate-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Time
            </th>
            {daysOfWeek.map((day, index) => (
              <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-500">
          {timeSlots.map((timeSlot, rowIndex) => (
            <tr key={rowIndex}>
              <td className="px-6 py-4 whitespace-nowrap">{timeSlot}</td>
              {daysOfWeek.map((day, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`} className="px-6 py-4 whitespace-nowrap">{/* Add your schedule data here */}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ListOfRequestedSchedulesTable = () => {
  return (
    <div className="mt-6 text-center">
      <h2 className="font-sans text-2xl font-bold text-plm-gold mb-4">
        List of Requested Schedules
      </h2>
      <table className="min-w-full">
        <tbody className="bg-white divide-y divide-slate-500">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-center font-bold">WEDNESDAY</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-left">Reserved for: </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-left">Time: </td>
          </tr>
          {/* You can add more rows as needed for other days */}
        </tbody>
      </table>
    </div>
  );
};

const Utilities = () => {
  return (
    <>
      <Outlet />
      <SideBar />
      <main>
        <div className="divide-y divide-slate-500 flex flex-col items-center justify-center z-50 mb-10">
          {/* Gold color PROFILE text in the middle top */}
          <h1 className="font-sans text-3xl font-bold text-plm-gold mt-10 mb-5">
            ROOM SCHEDULES
          </h1>

          {/* Profile picture with email and mobile number */}
          <div className="flex justify-center content-end mt-4 w-full p-5">
            <div className="w-96 flex flex-col items-center">
              <p className="font-sans text-xl text-plm mt-2 mb-2">Room: </p>
              <Select
                options={roomOptions}
                placeholder="Select a room"
                className="w-full mb-2"
              />
              <label htmlFor="scheduleDate">
                Date (for requested schedules)
              </label>
              <input
                type="date"
                id="scheduleDate"
                name="scheduleDate"
                className="w-full mb-2"
              />
              <button
                type="button"
                className="bg-plm-gold text-white px-4 py-2 rounded"
              >
                SEARCH
              </button>
            </div>
          </div>

          {/* Display the schedule table */}
          <ScheduleTable />

          {/* Display the list of requested schedules table */}
          <ListOfRequestedSchedulesTable />

        </div>
        <div className="fixed bottom-0 right-0 z-0">
          <img src={watermark_plm} alt="Fixed Image" className="w-52 h-auto " />
        </div>
      </main>
    </>
  );
};

export default Utilities;
