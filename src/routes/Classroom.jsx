import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import watermark_plm from "../assets/watermark_plm.png";
import teams_plm from "../assets/teams.png";

export default function Classroom () {
    return (
    <>
        <Outlet/>
        <SideBar/>
        <main>
            <div className="flex flex-col items-center justify-center z-50 mb-10">
                {/* Gold color PROFILE text in the middle top */}
                <h1 className="font-sans text-3xl font-bold text-plm-gold mt-10 mb-5">CLASSROOM</h1>

                <div className="w-full bg-black h-px mb-10"></div>

                <img src={teams_plm}  className="w-40"/>
                <p className="font-bold text-[25px]">Stay better connected with the Teams desktop app</p>

                {/* Profile picture with email and mobile number */}
                <div className="flex justify-center content-end mt-4 w-full p-5">
                    <button className="bg-[#4f46e5] text-white p-2 rounded-lg mr-4 drop-shadow-lg">Download the Windows App</button> 
                    <button className="bg-white p-2 rounded-lg drop-shadow-lg">Use the web app instead</button>
                    
                </div>

                <p>Already have the Teams app? <a href="#" className="font-bold text-[#4f46e5]">Launch it now</a></p>

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
