import { Outlet } from "react-router-dom";
import SideBar from "../SideBar.jsx";
import watermark_plm from "../assets/watermark_plm.png";
import Dropdown from "../components/sem_dropdown.jsx";
import Dropdown2 from "../components/department_dropdown.jsx";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Scrollbars } from 'react-custom-scrollbars-2';


export default function Schedules () {
    
    return (
        <>
            <Outlet/>
            <SideBar/>
            <main>
                <div className=" flex flex-col items-center justify-center z-50 mb-10">
                    
    
                    {/* Gold color PROFILE text in the middle top */}
                    <h1 className="font-sans text-xl font-bold text-plm-gold mt-10 mb-7">SCHEDULE</h1>
                    <div className="line"></div><br></br>
                    <div >
                    <p className="display flex font-sans text-xl text-plm mb-2">Department :   &nbsp;<Dropdown2/></p>              
                    </div>
                    <div>
                    <p className="display flex font-sans text-xl text-plm mt-2 mb-2">Sem / A.Y. :   &nbsp;<Dropdown/><br></br></p>                    
                    </div>

                    <div className="flex flex-col items-center center z-20 mb-8">
                    <Popup trigger=
                {<button className="generateSummaryBtn">SUBMIT</button>} 
                modal nested>
                {
                    close => (
                        <Scrollbars style={{ width: 750, height: 650 }}>
                        <div className=" flex flex-col items-center justify-center z-30 mb-5">
                    
                            <h1 className=" font-sans text-xl text-plm bold-text">IMPORTANT NOTICE</h1>
                             
                                <p className="font-sans text-m text-plm-gold">Put COLLEGE restriction on your NSTP classes if you don't want other College Units (CUs) to enlist on your created NSTP classes, and/or other subjects that you share/similarly offered to other CUs for that matter.</p>
                                  

                        <div className=" flex flex-col items-center justify-center z-50 mb-5">
                            <br /><p className="display flex font-sans text-xl text-plm bold-text"> Classes for the 1st Sem of AY 2023-2024</p>
                           <p className="display flex font-sans text-m text-black">(MECHANICAL ENGINEERING DEPARTMENT)</p>
                        </div>

                    <div className="display flex  items-center justify-center z-50 mb-10">
                        <button className="generateSummaryBtn3">ADD NEW CLASS</button> &nbsp;
                        <button className="generateSummaryBtn3">PRINT LIST</button>
                    </div>

                    <p className="noteHead">NOTE:</p><p className="note">You can now click the Class Code of the Lecture class on the left column for a new schedule input of the corresponding Laboratory class. Please proceed with caution.</p>
                    <div className="table-container">
      <table className="font-sans text-plm ">
        <thead>
          <tr>
            <th>Class</th>
            <th>Section</th>
            <th>Subject Title</th>
            <th>Schedule</th>
            <th>Instructor</th>
            <th>Slots</th>
            <th>Students</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <br></br>
            <div>
                                <button className="closeBtn" onClick=
                                    {() => close()}>
                                       CLOSE
                                </button>
                            </div>
            </div>
            </Scrollbars>
                    )                
                }                
            </Popup>
            <br></br>
            <Popup trigger=
                {<button className="generateSummaryBtn2">GENERATE SUMMARY LIST OF PROOFREADING</button>} 
                modal nested>
                {
                    close => (
                        <Scrollbars style={{ width: 750, height: 650 }}>
                        <div className=" flex flex-col items-center justify-center z-30 mb-5">                                      
                        <div className=" flex flex-col items-center justify-center z-50 mb-5">
                            <br /><p className="display flex font-sans text-xl text-plm bold-text"> Classes for the 1st Sem of AY 2023-2024</p>
                           <p className="display flex font-sans text-m text-black">(ALL COLLEGES)</p>
                        </div>
                    <p className="note1">Summary List of All Schedules</p>
                    <br></br>
                    <div className="display flex  items-center justify-center z-50 mb-10">
                        <button className="generateSummaryBtn3">ADD NEW CLASS</button> &nbsp;
                        <button className="generateSummaryBtn3">PRINT LIST</button>
                    </div>
                    <div className="table-container">
      <table className="font-sans text-plm ">
        <thead>
          <tr>
            <th>Class</th>
            <th>Section</th>
            <th>Subject Title</th>
            <th>Schedule</th>
            <th>Instructor</th>
            <th>Slots</th>
            <th>Students</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
          <tr>
            <td>ARE 101</td>
            <td>1</td>
            <td>Theorhy of Stuctures</td>
            <td>M 4:40p-5:30p F2F fIELD, Th 4:00p-5:30p F2F GCA 303</td>
            <td>NONE</td>
            <td>50</td>
            <td>50</td>
            <td><button className="Edit">Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <br></br>
            <div>
                                <button className="closeBtn" onClick=
                                    {() => close()}>
                                       CLOSE
                                </button>
                            </div>
            </div>
            </Scrollbars>
                    )                
                }                
            </Popup>
                    </div>
                    <div className="line"></div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                </div>
                <div className="fixed bottom-0 right-0 z-0">
                    <img
                    src={watermark_plm}
                    alt="Fixed Image"
                    className="w-52 h-auto "
                    />
                </div>
            </main>
        </>
        );
   
}
