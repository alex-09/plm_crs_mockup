import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import profile_pic from "../assets/logo.png";
import watermark_plm from "../assets/watermark_plm.png";

export default function Account () {
    const chairInfo = {
        plmEmail: 'rmdioses@plm.edu.ph',
        college: 'College of Engineering and Technology',
        email: 'raymunddioses@yahoo.com',
        mobileNum: '+63-919-456-7890',
        lastName: 'Dioses',
        firstName: 'Raymund',
        midName: 'M',
        gender: 'Male',
        civStatus: 'Married',
        citizenship: 'Filipino',
        facNum: '2022-90478',
    };

    return (
    <>
        <Outlet/>
        <SideBar/>
        <main>
            <div className="divide-y divide-slate-500 flex flex-col items-center justify-center z-50 mb-10">
            

                {/* Gold color PROFILE text in the middle top */}
                <h1 className="font-sans text-xl font-bold text-plm-gold mt-10 mb-5">PROFILE</h1>

                {/* Profile picture with email and mobile number */}
                <div className="flex justify-center content-end mt-4 w-full p-5">
                    <div className="flex-shrink-0 w-1/6 flex justify-center">
                        <img src={profile_pic} alt="Profile" className="w-20.5 h-20.5 rounded-full" />
                    </div>
                    <div className="ml-4 w-1/3 grid grid-cols-2 gap-10 content-end">
                    <p className="text-lg font-bold">Official PLM Email: </p>
                        <p className="text-lg">{chairInfo.plmEmail}</p>

                        <p className="text-lg font-bold">Personal Email: </p>
                        <p className="text-lg">{chairInfo.email}</p>

                        <p className="text-lg font-bold">Mobile Number: </p>
                        <p className="text-lg">{chairInfo.mobileNum}</p>
                    </div>
                </div>

                <div className="mt-4 flex flex-row justify-center w-full pt-10">

                    <div className="flex flex-col w-1/6">
                        <button className="bg-plm-red text-white px-4 py-2 mb-2 w-52">Change Pass</button>
                        <button className="bg-plm-red text-white px-4 py-2 w-52">Log Out</button>
                    </div>

                    {/* Chairperson information */}
                    <div className="grid grid-cols-2 gap-2 ml-4 w-1/3">
                        <p className="text-xl font-bold">CHAIRPERSON INFORMATION</p>
                        <p className="my-5"></p>
                        
                        <p className="text-lg font-bold">Personal Information</p>
                            <p className="my-5"></p>
                            
                            <p className="text-lg">Last Name:</p>
                            <p className="text-lg">{chairInfo.lastName}</p>

                            <p className="text-lg">First Name:</p>
                            <p className="text-lg">{chairInfo.firstName}</p>

                            <p className="text-lg">Middle Name:</p>
                            <p className="text-lg">{chairInfo.midName}</p>

                            <p className="text-lg">Gender:</p>
                            <p className="text-lg">{chairInfo.gender}</p>

                            <p className="text-lg">Civil Status:</p>
                            <p className="text-lg">{chairInfo.civStatus}</p>

                            <p className="text-lg">Citizenship:</p>
                            <p className="text-lg">{chairInfo.citizenship}</p>
                            
                        <p></p>
                        <p className="my-2"></p>

                        <p className="text-lg font-bold">College Information</p>
                            <p className="my-5"></p>

                            <p className="text-lg">Faculty Number:</p>
                            <p className="text-lg">{chairInfo.facNum}</p>

                            <p className="text-lg">College:</p>
                            <p className="text-lg">{chairInfo.college}</p>

                            <p className="text-lg">Official PLM Email:</p>
                            <p className="text-lg">{chairInfo.plmEmail}</p>
                    </div>
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

