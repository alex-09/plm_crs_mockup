import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import watermark_plm from "../assets/watermark_plm.png";

export default function Classroom () {
    return (
    <>
        <Outlet/>
        <SideBar/>
        <main>
            <div className="divide-y divide-slate-500 flex flex-col items-center justify-center z-50 mb-10">
                

                {/* Gold color PROFILE text in the middle top */}
                <h1 className="font-sans text-3xl font-bold text-plm-gold mt-10 mb-5">CLASSROOM</h1>

                {/* Profile picture with email and mobile number */}
                <div className="flex justify-center content-end mt-4 w-full p-5">
                    
                </div>

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
