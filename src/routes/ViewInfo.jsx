import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import { useState } from "react";
import ViewSched from './view/ViewGrades';

const steps = [
    { id: 1, title: "Step 1" },
    { id: 2, title: "Step 2" },
  ];

export default function ViewInfo () {

    const [activeStep, setActiveStep] = useState(1);

  const clickNextStep = () => {
      setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length));
    
  };

  const clickPrevStep = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 1));
  };


    return (
    <>
        <Outlet/>
        <SideBar/>
        <main>
        <div className="flex flex-col items-center justify-center z-50 mb-10">
          <ol className={`flex items-center w-1/2 justify-center mt-5`}>
            {steps.map((step, index) => (
              <li
                key={step.id}
                className={
                    `
                    ${
                        index != 2 ? "after:transition after:duration-500 justify-center flex w-full items-center text-white font-extrabold after:content-[''] after:shadow-[1px_2px_5px_-1px_rgba(0,0,0,1)] after:w-full after:h-1 after:border-plm-white  after:inline-block" : ""
                    } 
                    ${
                        index + 1 < activeStep ? "after:bg-plm-gold" : "after:bg-plm-white"
                    }
                    `
                }
              >
                <span className={`transition duration-500 border-white border-2 shadow shadow-slate-800 flex items-center justify-center w-10 h-10 ${(index + 1) <= activeStep ? "bg-plm-gold text-white" : "bg-plm-white text-black"} rounded-full lg:h-12 lg:w-12 shrink-0`}>
                  {step.id}
                </span>
              </li>
            ))}
          </ol>

        <h1 className="font-sans text-3xl font-bold text-plm-gold mt-10 mb-5">
            {activeStep === 1 ? 'View Grades' : activeStep === 2 ? 'View Grades' : ''}
        </h1>

        <div className="divide-y divide-slate-500 w-full">
            {activeStep === 1 && <ViewSched />}
            {activeStep === 2 && <ViewSched />}
        </div>

        {/* <div className="absolute bottom-0 right-0 p-4">
            <div className="flex flex-row gap-4">
                {activeStep > 1 && (
                <button onClick={clickPrevStep} className="w-15 bg-plm-red text-white font-extrabold p-2 rounded-md">
                    Previous
                </button>
                )}
                <button onClick={clickNextStep} className="w-15 bg-plm-red text-white font-extrabold p-2 rounded-md">
                Next
                </button>
            </div>
        </div> */}

          
        </div>
        </main>
    </>
    );
}
