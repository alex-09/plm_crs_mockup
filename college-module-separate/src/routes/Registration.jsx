import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';
import watermark_plm from '../assets/watermark_plm.png';

export default function Registration() {
  const [studentNumber1, setStudentNumber1] = useState('');
  const [studentNumber2, setStudentNumber2] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const [selectedOptions, setSelectedOptions] = useState(['', '', '', '', '', '']);

  const handleInputChange1 = (event) => {
    setStudentNumber1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setStudentNumber2(event.target.value);
  };

  const handleSearchClick = () => {
    console.log('Searching for student numbers:', studentNumber1, studentNumber2);
    setShowPopup(true);
  };

  const handleEnlistStudentClick = () => {
    // Implement logic for enlisting students
  };

  const handleAddClassClick = () => {
    // Implement logic for adding a non-prescribed class
  };

  return (
    <>
      <Outlet />
      <SideBar />
      <main>
        <div className="divide-y divide-slate-500 flex flex-col items-center justify-center z-50 mb-10">
          <h1 className="font-sans text-3xl font-bold text-plm-gold mt-10 mb-5">
            SEARCH STUDENT NUMBER
          </h1>

          <div className="flex flex-col items-center w-full p-5">
            <div className="flex justify-center content-end w-full mb-4">
              <p className="font-sans text-xl text-plm mt-2 mb-2">
                Student No. :{' '}
                <input
                  type="text"
                  value={studentNumber1}
                  onChange={handleInputChange1}
                  className="border-b-2 border-plm-gold px-2 mr-2"
                />
              </p>
              <span className="text-plm-gold font-bold text-xl">-</span>
              <p className="font-sans text-xl text-plm mt-2 mb-2 ml-2">
                <input
                  type="text"
                  value={studentNumber2}
                  onChange={handleInputChange2}
                  className="border-b-2 border-plm-gold px-2 ml-2"
                />
              </p>
            </div>
            <div className="flex justify-center content-end w-full">
              <button
                type="button"
                onClick={handleSearchClick}
                className="bg-plm-gold text-white px-4 py-2 rounded-md"
              >
                Search
              </button>
            </div>
            <div className="flex justify-center text-center mt-3"></div>
            <div className="flex justify-center w-full mt-3">
              <div className="border-b-4 border-black w-3/4"></div>
            </div>
            <p className="font-sans text-3xl font-bold text-plm-gold mt-10 mb-5 text-left w-full mt-5 ml-20">
              STUDENT ENLISTMENT
              <br />
              AYSEM: 20XX-20XX/X
            </p>
            <div className="flex flex-col items-start w-full p-5">
              {/* Add the pop-up */}
              {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                  <div className="bg-white p-8 rounded-md relative">
                    <button
                      onClick={() => setShowPopup(false)}
                      className="absolute top-2 right-2 text-xl font-bold text-gray-600 cursor-pointer focus:outline-none"
                    >
                      X
                    </button>
                    <p className="text-xl font-bold text-gray-800 mb-4">ENLISTMENT FORM</p>
                    {/* Table */}
                    <table className="table-auto w-full">
                      <thead>
                        <tr>
                          <th className="border px-4 py-2">CLASS</th>
                          <th className="border px-4 py-2">SCHEDULE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 6 }, (_, index) => (
                          <tr key={index}>
                            <td className="border px-4 py-2">CSC 0412-2</td>
                            <td className="border px-4 py-2">
                              {/* Dropdown menu */}
                              <select
                                value={selectedOptions[index]}
                                onChange={(e) => {
                                  const updatedOptions = [...selectedOptions];
                                  updatedOptions[index] = e.target.value;
                                  setSelectedOptions(updatedOptions);
                                }}
                                className="border rounded-md px-2 py-1"
                              >
                                <option value="">Select Schedule</option>
                                <option value="Option 1">CSC 0412-2 (2) || 2 Units || W 9:00a - 11:00a F2F GCA 307 || 50 (37)</option>
                                <option value="Option 2">CSC 0412-2 (2) || 2 Units || F 6:00p - 9:00p F2F FIELD || 50 (37)</option>
                                <option value="Option 3">CSC 0412-2 (2) || 2 Units || W 1:00p - 3:00p F2F GCA 309 || 50 (37)</option>
                                {/* Add more options as needed */}
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {/* End of table */}
                    {/* Buttons */}
                    <div className="flex justify-center mt-5">
                      <button
                        onClick={handleEnlistStudentClick}
                        className="bg-plm-gold text-white px-4 py-2 rounded-md mr-4"
                      >
                        Enlist Student
                      </button>
                      <button
                        onClick={handleAddClassClick}
                        className="bg-plm-gold text-white px-4 py-2 rounded-md"
                      >
                        Add Class (Non-Prescribed) 1
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* ... (rest of the code) */}
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 right-0 z-0">
          <img src={watermark_plm} alt="Fixed Image" className="w-52 h-auto" />
        </div>
      </main>
    </>
  );
}
