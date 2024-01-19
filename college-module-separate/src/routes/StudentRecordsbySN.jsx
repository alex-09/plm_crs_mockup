import { Outlet } from "react-router-dom";
import SideBar from "../SideBar.jsx";
import watermark_plm from "../assets/watermark_plm.png";
import Dropdown from "../components/sem_dropdown.jsx";
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Scrollbars } from 'react-custom-scrollbars-2';


export default function StudentRecordsbySN () {
    const [studentNumber1, setStudentNumber1] = useState('');
  const [studentNumber2, setStudentNumber2] = useState('');

  const handleInputChange1 = (event) => {
    setStudentNumber1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setStudentNumber2(event.target.value);
  };
    return (
        <>
            <Outlet/>
            <SideBar/>
            <main>
                <div className=" flex flex-col items-center justify-center z-50 mb-10">
                    
    
                    {/* Gold color PROFILE text in the middle top */}
                    <h1 className="font-sans text-xl font-bold text-plm-gold mt-10 mb-5">STUDENT RECORDS</h1>
                    <div className="line"></div><br></br>

                    <div className="flex justify-center content-end w-full mb-4">
                    <p className="font-sans text-xl text-plm mt-2 mb-2">
                Student No. :{' '}
                <input
                  type="text"
                  value={studentNumber1}
                  onChange={handleInputChange1}
                  className="border-b-2 border-plm- px-2 mr-2"
                />
              </p>
              <span className="text-plm- font-bold text-3xl">-</span>
              <p className="font-sans text-xl text-plm mt-2 mb-2 ml-2">
                <input
                  type="text"
                  value={studentNumber2}
                  onChange={handleInputChange2}
                  className="border-b-2 border-plm px-2 ml-2"
                />
              </p>           
                    </div>
                    <div>
                    <p className="display flex font-sans text-xl text-plm mt-2 mb-1">Sem / A.Y. :   &nbsp;<Dropdown/><br></br></p>                    
                    </div>

                    <div className="flex flex-row items-center justify-center z-20 mb-5">

                    <Popup trigger=
                {<button className="searchBtn">SEARCH</button>} 
                modal nested>
                {
                    close => (
                        <Scrollbars style={{ width: 750, height: 650 }}>
                        <div className=" flex flex-col items-center justify-center z-30 mb-5">
                    <div className="table-container">
                    <table className="font-sans text-plm">
        <thead>
          <tr>
            <th><p className="text-start font-sans text-m text-plm mt-0 mb-0 ml-3 text-bold">PERSONAL DETAILS</p></th>         
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p className="text-center font-sans text-m text-plm mt-2 mb-2 ml-3">
                Last Name:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp; &nbsp; &nbsp;
                First Name:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
                Middle Name:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-3"/>
                &nbsp; &nbsp;
                Extension Name:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-3"/>
                <br></br>
                Student No.:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp; &nbsp; &nbsp;
                Birthdate:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
                Birth Place:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp; &nbsp; &nbsp;
                Citizenship:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
                Gender:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp; &nbsp; &nbsp;
                Civil Status:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
                Contact No.:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-3"/>
                &nbsp; &nbsp; &nbsp; &nbsp;
                Email Address:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-3"/>
                <br></br>
              </p>
              </td>
          </tr>
          
        </tbody>
      </table>
      <table className="font-sans text-plm">
        <thead>
          <tr>
            <th><p className="text-start font-sans text-m text-plm mt-0 mb-0 ml-3 text-bold">STUDENT TERMS (for Nth Semester, AY 20XX-20XX)</p></th>         
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p className="text-center font-sans text-m text-plm mt-2 mb-2 ml-3">
                Entry AY:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp; &nbsp; &nbsp;
                Entry Sem:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
               Program:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp;
                Student Type:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
                College:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp; &nbsp; &nbsp;
                Block:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
                Registration Code:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-2"/>
                &nbsp; &nbsp; &nbsp; &nbsp;
                Year Level:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-2"/>
                <br></br>
                Enrolled:<form> 
                  <label>Yes&nbsp; &nbsp;<input type='radio' name="yes" value="yes"></input></label>&nbsp; &nbsp;
                  <label>No&nbsp; &nbsp;<input type='radio' name="no" value="no"></input></label>
                </form>
                &nbsp; &nbsp;
                Graduating this yr?:
                <form> 
                  <label>Yes&nbsp; &nbsp;<input type='radio' name="yes" value="yes"></input></label>&nbsp; &nbsp;
                  <label>No&nbsp; &nbsp;<input type='radio' name="no" value="no"></input></label>
                </form>
                Scholastic Status: PAYING
                <br></br>                
              </p>
              </td>
          </tr>          
        </tbody>
      </table>
      <table className="font-sans text-plm">
        <thead>
          <tr>
            <th><p className="text-start font-sans text-m text-plm mt-0 mb-0 ml-3 text-bold">CURRENT ADDRESS</p></th>         
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p className="text-center font-sans text-m text-plm mt-2 mb-2 ml-3">
                Street Address:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"
                  style={{width: "500px"}}/>
                <br></br>
                Province-City:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp;
                Zip Code:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
                Emergency Contact:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-3"/>
                &nbsp; &nbsp;
                Phone No.:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-3"/>                
              </p>
              </td>
          </tr>          
        </tbody>
      </table>
      <table className="font-sans text-plm">
        <thead>
          <tr>
            <th><p className="text-start font-sans text-m text-plm mt-0 mb-0 ml-3 text-bold">PERMANENT ADDRESS</p></th>         
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p className="text-center font-sans text-m text-plm mt-2 mb-2 ml-3">
                <input type="checkbox"/>&nbsp; Permanent Address is same as Current Address 
                <br></br>
                Street Address:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"
                  style={{width: "500px"}}/>
                <br></br>
                Province-City:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp;
                Zip Code:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
                Emergency Contact:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-3"/>
                &nbsp; &nbsp;
                Phone No.:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-3"/>                
              </p>
              </td>
          </tr>          
        </tbody>
      </table>
    </div>
    <br></br>
            <div>
                                <button className="finNsave" onClick=
                                    {() => close()}>
                                       FINISH & SAVE
                                </button>
                            </div>
            </div>
            </Scrollbars>
                    )                
                }                
            </Popup>
            &nbsp;
            <Popup trigger=
                {<button className="addBtn">ADD STUDENT</button>} 
                modal nested>
                {
                    close => (
                        <Scrollbars style={{ width: 750, height: 650 }}>
                        <div className=" flex flex-col items-center justify-center z-30 mb-5">                                      
                        <div className="table-container">
      <table className="font-sans text-plm">
        <thead>
          <tr>
            <th><p className="text-start font-sans text-m text-plm mt-0 mb-0 ml-3 text-bold">PERSONAL DETAILS</p></th>         
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p className="text-center font-sans text-m text-plm mt-2 mb-2 ml-3">
                Last Name:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp; &nbsp; &nbsp;
                First Name:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
                Middle Name:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-3"/>
                &nbsp; &nbsp;
                Extension Name:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-3"/>
                <br></br>
                Student No.:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp; &nbsp; &nbsp;
                Birthdate:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
                Birth Place:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp; &nbsp; &nbsp;
                Citizenship:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
                Gender:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp; &nbsp; &nbsp;
                Civil Status:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
                Contact No.:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-3"/>
                &nbsp; &nbsp; &nbsp; &nbsp;
                Email Address:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-3"/>
                <br></br>
              </p>
              </td>
          </tr>
          
        </tbody>
      </table>
      <table className="font-sans text-plm">
        <thead>
          <tr>
            <th><p className="text-start font-sans text-m text-plm mt-0 mb-0 ml-3 text-bold">STUDENT TERMS (for Nth Semester, AY 20XX-20XX)</p></th>         
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p className="text-center font-sans text-m text-plm mt-2 mb-2 ml-3">
                Entry AY:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp; &nbsp; &nbsp;
                Entry Sem:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
               Program:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp;
                Student Type:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
                College:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp; &nbsp; &nbsp;
                Block:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
                Registration Code:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-2"/>
                &nbsp; &nbsp; &nbsp; &nbsp;
                Year Level:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-2"/>
                <br></br>
                Enrolled:<form> 
                  <label>Yes&nbsp; &nbsp;<input type='radio' name="yes" value="yes"></input></label>&nbsp; &nbsp;
                  <label>No&nbsp; &nbsp;<input type='radio' name="no" value="no"></input></label>
                </form>
                &nbsp; &nbsp;
                Graduating this yr?:
                <form> 
                  <label>Yes&nbsp; &nbsp;<input type='radio' name="yes" value="yes"></input></label>&nbsp; &nbsp;
                  <label>No&nbsp; &nbsp;<input type='radio' name="no" value="no"></input></label>
                </form>
                Scholastic Status: PAYING
                <br></br>                
              </p>
              </td>
          </tr>          
        </tbody>
      </table>
      <table className="font-sans text-plm">
        <thead>
          <tr>
            <th><p className="text-start font-sans text-m text-plm mt-0 mb-0 ml-3 text-bold">CURRENT ADDRESS</p></th>         
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p className="text-center font-sans text-m text-plm mt-2 mb-2 ml-3">
                Street Address:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"
                  style={{width: "500px"}}/>
                <br></br>
                Province-City:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp;
                Zip Code:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
                Emergency Contact:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-3"/>
                &nbsp; &nbsp;
                Phone No.:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-3"/>                
              </p>
              </td>
          </tr>          
        </tbody>
      </table>
      <table className="font-sans text-plm">
        <thead>
          <tr>
            <th><p className="text-start font-sans text-m text-plm mt-0 mb-0 ml-3 text-bold">PERMANENT ADDRESS</p></th>         
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p className="text-center font-sans text-m text-plm mt-2 mb-2 ml-3">
                <input type="checkbox"/>&nbsp; Permanent Address is same as Current Address 
                <br></br>
                Street Address:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"
                  style={{width: "500px"}}/>
                <br></br>
                Province-City:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                &nbsp; &nbsp;
                Zip Code:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-5"/>
                <br></br>
                Emergency Contact:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-3"/>
                &nbsp; &nbsp;
                Phone No.:<input
                  type="text"
                  className="border-b-2 border-plm-gold px-2 ml-3"/>                
              </p>
              </td>
          </tr>          
        </tbody>
      </table>
    </div>
    <br></br>
            <div>
                                <button className="finNsave" onClick=
                                    {() => close()}>                                      
                                       FINISH & SAVE
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
