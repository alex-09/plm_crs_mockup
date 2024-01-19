import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import profile_pic from "../assets/logo.png";

export default function Account () {
    const studentInfo = {
        plmEmail: 'apalingad2020@plm.edu.ph',
        yearLevel: 4,
        pedigree: 'pedigree',
        program: 'Bachelor of Science in Computer Science',
        studentNumber: '202011847',
        studentType: 'Regular',
        regStatus: 'Paid', 
        email: 'alexandeilingad@gmail.com',
        mobileNum: '097-7680-1291',
        lastName: 'Ling',
        firstName: 'Andrei',
        midName: 'Aldave',
        gender: 'male',
        civStatus: 'taken',
        citizenship: 'Marsian'
    };

    return (
    <>
        <Outlet/>
        <SideBar/>
        <main >
            <div className="flex flex-col items-center justify-center z-50 mb-10">
            

                {/* Gold color PROFILE text in the middle top */}
                <h1 className="font-sans text-3xl font-bold text-plm-gold mt-10 mb-5">PROFILE</h1>

                <div className="w-full bg-black h-px"></div>

                {/* Profile picture with email and mobile number */}
                <div className="flex justify-center content-end mt-4 w-full">
                    
                    <div className="align-top justify-center  mr-12">
                        <img src={profile_pic} className="align-baseline pt-10" alt="Profile" />
                    </div>
                    <div className="ml-4 grid grid-cols-2 gap-2 content-end bg-white p-[2rem] w-[600px] rounded-xl">
                        <p className="text-[35px] font-bold col-span-2">{studentInfo.firstName} {studentInfo.midName} {studentInfo.lastName}</p>
                        <p className="text-[25px] font-bold col-span-2">{studentInfo.studentNumber} </p>
                        <p className="text-lg font-bold">Official PLM Email: </p>
                        <p className="text-lg">{studentInfo.plmEmail}</p>

                        <p className="text-lg font-bold">Personal Email: </p>
                        <p className="text-lg">{studentInfo.email}</p>

                        <p className="text-lg font-bold">Mobile Number: </p>
                        <p className="text-lg">{studentInfo.mobileNum}</p>
                    </div>
                </div>

                <div className="mt-4 flex flex-row justify-center w-full ">

                    <div className="flex flex-col w-1/6 ">
                        <p className="text-xl font-bold pb-2">Username: 202011847</p>
                        <button className="bg-plm-red text-white px-4 py-2 mb-2 w-52">Change Pass</button>

                    </div>

                    {/* Student information */}
                    <div className="grid grid-cols-2 gap-2 ml-4 w-1/3 bg-white p-[2rem] w-[600px]  rounded-xl">
                        <p className="text-[25px] font-bold col-span-2">STUDENT INFORMATION</p>
                        
                        <p className="text-lg font-bold">Personal Information</p>
                            <p className="my-5"></p>
                            
                            <p className="pl-10 text-lg font-extrabold">Last Name:</p>
                            <p className="pl-10 text-lg">{studentInfo.lastName}</p>

                            <p className="pl-10 text-lg font-extrabold">First Name:</p>
                            <p className="pl-10 text-lg">{studentInfo.firstName}</p>

                            <p className="pl-10 text-lg font-extrabold">Middle Name:</p>
                            <p className="pl-10 text-lg">{studentInfo.midName}</p>

                            <p className="pl-10 text-lg font-extrabold">Gender:</p>
                            <p className="pl-10 text-lg">{studentInfo.gender}</p>

                            <p className="pl-10 text-lg font-extrabold">Civil Status:</p>
                            <p className="pl-10 text-lg">{studentInfo.civStatus}</p>

                            <p className="pl-10 text-lg font-extrabold">Citizenship:</p>
                            <p className="pl-10 text-lg">{studentInfo.citizenship}</p>
                            
                        <p></p>
                        <p className="my-2"></p>

                        <p className="text-lg font-bold">Student Information</p>
                            <p className="my-5"></p>

                            <p className="pl-10 text-lg font-extrabold">Student Number:</p>
                            <p className="pl-10 text-lg">{studentInfo.studentNumber}</p>

                            <p className="pl-10 text-lg font-extrabold">Pedigree:</p>
                            <p className="pl-10 text-lg">{studentInfo.pedigree}</p>

                            <p className="pl-10 text-lg font-extrabold">Student Type:</p>
                            <p className="pl-10 text-lg">{studentInfo.studentType}</p>

                            <p className="pl-10 text-lg font-extrabold">Registration Status:</p>
                            <p className="pl-10 text-lg">{studentInfo.regStatus}</p>

                            <p className="pl-10 text-lg font-extrabold">Program:</p>
                            <p className="pl-10 text-lg">{studentInfo.program}</p>

                            <p className="pl-10 text-lg font-extrabold">Year Level:</p>
                            <p className="pl-10 text-lg">{studentInfo.yearLevel}</p>

                            <p className="pl-10 text-lg font-extrabold">Official PLM Email:</p>
                            <p className="pl-10 text-lg">{studentInfo.plmEmail}</p>
                    </div>
                </div>

            </div>
            {/* <div className="fixed bottom-0 right-0 z-0">
                <img
                src={watermark_plm}
                alt="Fixed Image"
                className="w-52 h-auto "
                />
            </div> */}
        </main>
       

    </>
    );


}

