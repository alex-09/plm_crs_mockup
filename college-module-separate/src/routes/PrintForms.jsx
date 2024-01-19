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
                    <h1 className="font-sans text-xl font-bold text-plm-gold mt-10">TEACHING ASSIGNMENTS</h1><br></br>
                    
                    <div className="line"></div>
                    <h1 className="aysem"><center><font size="4">{AYSEM}</font></center></h1>
                    <div>
                    <p className="display flex font-sans text-xl text-plm mt-4 mb-1">Faculty :   &nbsp;<DropDown3/>
                    </p>              
                    </div><br></br>

                    <div className="flex flex-col items-center justify-center z-20 mb-1">
                        <button className="generateSearchBtn">SEARCH</button><br></br>
                    </div>

                    <div className="line"></div>
                  
            </div>
            </main>
        </>
        );
   
}
