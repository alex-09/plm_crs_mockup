import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import profile_pic from "../assets/logo.png";
import watermark_plm from "../assets/watermark_plm.png";

export default function Account () {
    const studentInfo = {
        plmEmail: 'apalingad2020@plm.edu.ph',
        yearLevel: 4,
        pedigree: 'pedigree',
        program: 'Bachelor of Science in Computer Science',
        studentNumber: '202011847',
        studentType: 'Regular',
        regStatus: 'Paid', 
        email: 'ahoo@yahoo.com',
        mobileNum: '123-456-7890',
        lastName: 'Ling',
        firstName: 'Lexi',
        midName: 'Aldave',
        gender: 'male',
        civStatus: 'taken',
        citizenship: 'marsian'
    };

    return (
    <>
        <Outlet/>
        <SideBar/>
        <main>
            <div className="divide-y divide-slate-500 flex flex-col items-center justify-center z-50 mb-10">
            

                {/* Gold color PROFILE text in the middle top */}
                <h1 className="font-sans text-3xl font-bold text-plm-gold mt-10 mb-5">PROFILE</h1>

                {/* Profile picture with email and mobile number */}
                <div className="flex justify-center content-end mt-4 w-full p-5">
                    <div className="flex-shrink-0 w-1/6 flex justify-center">
                        <img src={profile_pic} alt="Profile" className="w-26 h-26 rounded-full" />
                    </div>
                    <div className="ml-4 w-1/3 grid grid-cols-2 gap-2 content-end">
                    <p className="text-lg font-bold">Official PLM Email: </p>
                        <p className="text-lg">{studentInfo.plmEmail}</p>

                        <p className="text-lg font-bold">Personal Email: </p>
                        <p className="text-lg">{studentInfo.email}</p>

                        <p className="text-lg font-bold">Mobile Number: </p>
                        <p className="text-lg">{studentInfo.mobileNum}</p>
                    </div>
                </div>

                <div className="mt-4 flex flex-row justify-center w-full pt-10">

                    <div className="flex flex-col w-1/6">
                        <button className="bg-plm-red text-white px-4 py-2 mb-2 w-52">Change Pass</button>
                        <button className="bg-plm-red text-white px-4 py-2 w-52">Log Out</button>
                    </div>

                    {/* Student information */}
                    <div className="grid grid-cols-2 gap-2 ml-4 w-1/3">
                        <p className="text-xl font-bold">STUDENT INFORMATION</p>
                        <p className="my-5"></p>
                        
                        <p className="text-lg font-bold">Personal Information</p>
                            <p className="my-5"></p>
                            
                            <p className="text-lg">Last Name:</p>
                            <p className="text-lg">{studentInfo.lastName}</p>

                            <p className="text-lg">First Name:</p>
                            <p className="text-lg">{studentInfo.firstName}</p>

                            <p className="text-lg">Middle Name:</p>
                            <p className="text-lg">{studentInfo.midName}</p>

                            <p className="text-lg">Gender:</p>
                            <p className="text-lg">{studentInfo.gender}</p>

                            <p className="text-lg">Civil Status:</p>
                            <p className="text-lg">{studentInfo.civStatus}</p>

                            <p className="text-lg">Citizenship:</p>
                            <p className="text-lg">{studentInfo.citizenship}</p>
                            
                        <p></p>
                        <p className="my-2"></p>

                        <p className="text-lg font-bold">Student Information</p>
                            <p className="my-5"></p>

                            <p className="text-lg">Student Number:</p>
                            <p className="text-lg">{studentInfo.firstName}</p>

                            <p className="text-lg">Pedigree:</p>
                            <p className="text-lg">{studentInfo.pedigree}</p>

                            <p className="text-lg">Student Type:</p>
                            <p className="text-lg">{studentInfo.studentType}</p>

                            <p className="text-lg">Registration Status:</p>
                            <p className="text-lg">{studentInfo.regStatus}</p>

                            <p className="text-lg">Program:</p>
                            <p className="text-lg">{studentInfo.program}</p>

                            <p className="text-lg">Year Level:</p>
                            <p className="text-lg">{studentInfo.yearLevel}</p>

                            <p className="text-lg">Official PLM Email:</p>
                            <p className="text-lg">{studentInfo.plmEmail}</p>
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

