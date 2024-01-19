import downl from "../../assets/dl.png";
export default function ViewGrades() {
    return (
        <div className="justify-center w-full  p-5">
                    <div className=" grid grid-cols-5 gap-2 w-full">
                        <div className="col-span-1 border border-amber-400 px-4 py-2 bg-[#DAC898]">DATE</div>
                        <div className="col-span-1 border border-amber-400 px-4 py-2 bg-[#DAC898]">GWA</div>
                        <div className="col-span-1 border border-amber-400 px-4 py-2 bg-[#DAC898]">COMPILE</div>
                        <div className="col-span-1 border border-amber-400 px-4 py-2 bg-[#DAC898]">STATUS</div>
                        <div className="col-span-1 border border-amber-400 px-4 py-2 bg-[#DAC898]">ACTION</div>

                        <div className="col-span-1 border border-[#DAC898] px-4 py-2"> 2022-2023 </div>
                        <div className="col-span-1 border border-[#DAC898] px-4 py-2 text-center"> 3 </div>
                        <div className="col-span-1 border border-[#DAC898] px-4 py-2"> NONE </div>
                        <div className="col-span-1 border border-[#DAC898] px-4 py-2 text-center"> PASSED </div>
                        <div className="col-span-1 border border-[#DAC898] px-4 py-2 text-center"> 
                            <button><img src={downl} width="10px" className="mx-auto" alt="" /></button>
                        </div>

                        <div className="col-span-1 border border-[#DAC898] px-4 py-2"> 2024-2025 </div>
                        <div className="col-span-1 border border-[#DAC898] px-4 py-2 text-center"> 2 </div>
                        <div className="col-span-1 border border-[#DAC898] px-4 py-2"> NONE </div>
                        <div className="col-span-1 border border-[#DAC898] px-4 py-2 text-center"> PASSED </div>
                        <div className="col-span-1 border border-[#DAC898] px-4 py-2 text-center"> <button><img src={downl} width="10px" className="mx-auto" alt="" /></button> </div>

                    
                    </div>
                </div>
    )
}