import { Outlet } from "react-router-dom";
import SideBar from "../SideBar.jsx";
import watermark_plm from "../assets/watermark_plm.png";
import DropDown3 from "../components/faculty_dropdown.jsx";


export default function PrintForms() {
  var AYSEM = '1st Sem, SY 2023 - 2024';
    return (
        <>
            <Outlet/>
            <SideBar/>
            <main>
                <div className="fixed bottom-0 right-0 z-0">
                    <img
                    src={watermark_plm}
                    alt="Fixed Image"
                    className="w-52 h-auto "
                    />
                </div>

                <div className=" flex flex-col items-center justify-center z-50 mb-10">
                    
                    {/* Gold color PROFILE text in the middle top */}
                    <h1 className="font-sans text-3xl font-bold text-plm-gold mt-10">TEACHING ASSIGNMENTS<br></br><center><font size="4">{AYSEM}</font></center></h1>

                    <div>
                    <p className="display flex font-sans text-xl text-plm mt-7 mb-1">Faculty :   <DropDown3/></p>              
                    </div>

                    <div className="flex flex-col items-center justify-center z-20 mb-1">
                        <button className="generateSearchBtn">Search</button><br></br>
                    </div>

                    <div className="line"></div>
                    <div className="flex flex-col items-left justify-center z-50 mb-3">
                            <br /><p className="display flex font-sans text-xl text-plm bold-text">GUIALIL, JAMILAH S.</p>
                           <p className="display flex font-sans text-xl text-blue bold-text"><font size="3">Lecture II, PART-TIME</font></p>
                           <p>This College has considered you to teach the following subject(s) for the stipulated term.</p>
                        </div>

                    <div className="flex z-50 mb-8">
                        <p><button className="editBtn">Edit</button></p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <p><button className="printBtn">Print</button></p>
                    </div>

                    <div className="table-container">
                        <table className="font-sans text-plm ">
                          <thead>
                            <tr>
                              <th>Subject Code & Section</th>
                              <th>Subject Title</th>
                              <th>Units</th>
                              <th>Schedule</th>
                              <th>No. of Students</th>
                              <th>Credited Units</th>
                              <th>College</th>
                              <th>Type of Load</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>CSC 0413 - 1</td>
                              <td>CS Elective 2 (lec)</td>
                              <td>2</td>
                              <td>W 7:00a-9:00a F2F COMP LAB 3</td>
                              <td>39</td>
                              <td>2</td>
                              <td>CET</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>CSC 0413.1 - 1</td>
                              <td>CS Elective 2 (lab)</td>
                              <td>1</td>
                              <td>W 9:00a-10:30a F2F COMP LAB 3</td>
                              <td>39</td>
                              <td>1</td>
                              <td>CET</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>CSC 0413 - 2</td>
                              <td>CS Elective 2 (lec)</td>
                              <td>2</td>
                              <td>Th 7:00a-9:00a F2F COMP LAB 3</td>
                              <td>39</td>
                              <td>2</td>
                              <td>CET</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>CSC 0413.1 - 2</td>
                              <td>CS Elective 2 (lab)</td>
                              <td>1</td>
                              <td>Th 9:00a-10:30a F2F COMP LAB 3</td>
                              <td>39</td>
                              <td>1</td>
                              <td>CET</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>CSC 0413 - 3</td>
                              <td>CS Elective 2 (lec)</td>
                              <td>2</td>
                              <td>F 7:00a-9:00a F2F COMP LAB 3</td>
                              <td>39</td>
                              <td>2</td>
                              <td>CET</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>CSC 0413.1 - 3</td>
                              <td>CS Elective 2 (lab)</td>
                              <td>1</td>
                              <td>F 9:00a-10:30a F2F COMP LAB 3</td>
                              <td>39</td>
                              <td>1</td>
                              <td>CET</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>CSC 0212 - 1</td>
                              <td>Living in the IT World</td>
                              <td>3</td>
                              <td>S 9:00a-10:30a F2F COMP LAB 3</td>
                              <td>39</td>
                              <td>3</td>
                              <td>CET</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    <br></br>
                    <div className="flex flex-col items-right justify-center z-50 mb-5">
                      <p className="display flex font-sans text-xl text-blue bold-text"><font size="4">Total No. of Units : 12 Total No. of Credits : 12</font></p>
                    </div>
                    <div className="table-container">
                        <table className="font-sans text-plm ">
                          <thead>
                           <th colspan="2">Consultation Hours</th>
                          </thead>
                          <thead>
                            <tr>
                              <th>Day/Time</th>
                              <th>No. of Hours</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Date Container --- Time1 Container --- Time2 Container</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Total</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    <br></br>
                    <div className="table-container">
                        <table className="font-sans text-plm ">
                          <thead>
                           <th colspan="2">Summary of Load</th>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Regular Teaching Load (RL)</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Extra Load (EL)</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Administrative Load (AL)</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Substitution Load (SL)</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Off-Campus Load (OCL)</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Study Load (StL)</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Outside Teaching Load (OTL)</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Substitution Load Without PAY (SLW)</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Total no. of Units</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    <br></br>
                    <div className="flex flex-col items-right justify-center z-50 mb-5">
                      <p className="display flex font-sans text-xl text-blue bold-text"><font size="2">*Effectivity Date : Date Container</font></p>
                    </div>
            </div>
            </main>
        </>
        );
   
}
