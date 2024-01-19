import { Outlet } from "react-router-dom";
import SideBar from "../SideBar.jsx";
import watermark_plm from "../assets/watermark_plm.png";
import DropDown5 from "../components/block_dropdown.jsx";


export default function StudentRecordsbyBI () {
    return (
        <>
            <Outlet/>
            <SideBar/>
            <main>
                <div className=" flex flex-col items-center justify-center z-50 mb-10">
                    
    
                    {/* Gold color PROFILE text in the middle top */}
                    <h1 className="font-sans text-xl font-bold text-plm-gold mt-10 mb-7">BLOCK RECORDS</h1>
                    <div className="line"></div> <br></br>

                    <div >
                    <p className="display flex font-sans text-xl text-plm">Block ID :   &nbsp;<DropDown5/></p>              
                    </div>
                    <br></br>

                    <div className="flex flex-row items-center justify-center z-20 mb-5">

                        <button className="searchBtn1">SEARCH</button>

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
