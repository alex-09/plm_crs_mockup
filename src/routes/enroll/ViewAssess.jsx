import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ViewAssess() {
    const [active, setActive] = useState('ALL'); 
    const [selectedSem, setSelectedSem] = useState(''); // ${val.sem}, ${val.ayear} For the text to show

    const semesters = [
        {id: "12324", sem: "1st", ayear: "2023 - 2024"},
        {id: "22223", sem: "2nd", ayear: "2022 - 2023"}
    ]

    const assessment = [
        {
            semesters: "12324",
            status: "Covered by CHED", 
            tuituionFee: 1200.50, 
            miscFee: 750.25,
            labFee: 900.80,
            otherFee: 1500.00,
            datePaid: "2023",
            total: 0
        },
        {
            semesters: "22223",
            status: "Covered by CHED", 
            tuituionFee: 1200.50, 
            miscFee: 750.25,
            labFee: 910.90,
            otherFee: 1800.25,
            datePaid: "2023",
            total: 0
        }
    ]
    

    const changeActiveSem = (id) => {
        setActive(id);
        
        semesters.map((val) => {
            if (val.id == id) {
                setSelectedSem(`${val.sem}, ${val.ayear}`)
            }
        })
    }

    console.log("FILTERING", assessment.filter((item) => item.semesters == active))

    // TODO ------------
    // if there is no active option, the table must hide
    // if there is a selected sem and academic year (ayear) then show that table
    // you should have an option for all too
    // -------------------------------------

    
    // Function to get the total of the assessment
    const getAssessTotal= (index) => {
        const tmp = assessment[index]
        var total =     tmp.tuituionFee +
                        tmp.miscFee +
                        tmp.labFee +
                        tmp.otherFee
        return total
    }

    // Insert the computed total in assessment data
    assessment.map((val, index) => {
        assessment[index].total = getAssessTotal(index);
    })

    const getOptionValue = (val) => {
        setActive(val.target.value)
    }

    return (
        <>
            <div>
            <main>
                <div className="flex flex-col items-center justify-center z-50 mb-10">
                    <div className="flex justify-center content-end mt-4 w-full">
                        
                        <div className="align-baseline justify-center mr-5 pt-1">
                            Sem / A.Y.:
                        </div>
                        <div className="ml-4 grid content-end w-3/4 rounded-xl text-center">
                        <Menu as="div" className="relative inline-block text-left" onChange={getOptionValue}>
                            <div className=''>
                                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-amber-400 hover:bg-gray-50 ">
                                {active == "ALL" ? "ALL" : selectedSem}
                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {semesters.map((val, index) => {
                                        return(
                                            <>
                                            <Menu.Item key={index} disabled={active == 'ALL' ? false : false}
                                                >
                                                {() => (
                                                    <a
                                                    href="#"
                                                    className={classNames(
                                                        active == `${val.id}` ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                    onClick={() => changeActiveSem(`${val.id}`)}>
                                                    {val.sem}, {val.ayear}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            </>
                                        )
                                    })}
                                </div>
                                    
                                    <Menu.Item>
                                        <a
                                            href="#"
                                            className={classNames(
                                                active == "ALL" ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            onClick={() => setActive("ALL")}>
                                            ALL
                                        </a>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        </div>
                    </div>
                </div>

                <div className={
                        assessment.length == 0 ? "grid grid-cols-7 gap-2 invisible" : "grid grid-cols-7 gap-2"  
                    }>
                    <div className="col-span-1 border border-amber-400 px-4 py-2 bg-[#DAC898]">Status</div>
                    <div className="col-span-1 border border-amber-400 px-4 py-2 bg-[#DAC898]">Tuition Fee</div>
                    <div className="col-span-1 border border-amber-400 px-4 py-2 bg-[#DAC898]">Miscellaneous Fee</div>
                    <div className="col-span-1 border border-amber-400 px-4 py-2 bg-[#DAC898]">Laboratory Fee</div>
                    <div className="col-span-1 border border-amber-400 px-4 py-2 bg-[#DAC898]">Other Fee</div>
                    <div className="col-span-1 border border-amber-400 px-4 py-2 bg-[#DAC898]">Date Paid</div>
                    <div className="col-span-1 border border-amber-400 px-4 py-2 bg-[#DAC898]">Total</div>

                    {
                        assessment.filter((item) => item.semesters == active || active == "ALL").map((content) =>
                            {
                                return (
                                    <>
                                        <div className="col-span-1 border border-[#DAC898] px-4 py-2">{content.status}</div>
                                        <div className="col-span-1 border border-[#DAC898] px-4 py-2">₱{(content.tuituionFee).toFixed(2)}</div>
                                        <div className="col-span-1 border border-[#DAC898] px-4 py-2">₱{(content.miscFee).toFixed(2)}</div>
                                        <div className="col-span-1 border border-[#DAC898] px-4 py-2">₱{(content.labFee).toFixed(2)}</div>
                                        <div className="col-span-1 border border-[#DAC898] px-4 py-2">₱{(content.otherFee).toFixed(2)}</div>
                                        <div className="col-span-1 border border-[#DAC898] px-4 py-2">{content.datePaid}</div>
                                        <div className="col-span-1 border border-[#DAC898] px-4 py-2">₱{(content.total).toFixed(2)}</div>
                                    </>
                                )
                            }
                        )
                    }

                    
                </div>
                <div className={assessment.length == 0 ? `text-center ml-auto mr-auto` : `invisible`}>No assessments yet</div>

            </main>
            </div>
        </>
    )
}