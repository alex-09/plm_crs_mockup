export default function ViewAssess() {
    return (
        <>
            <div>
            <main >
                <div className="flex flex-col items-center justify-center z-50 mb-10">
                    {/* Profile picture with email and mobile number */}
                    <div className="flex justify-center content-end mt-4 w-full">
                        
                        <div className="align-baseline justify-center  mr-5">
                            Sem / A.Y.:
                        </div>
                        <div className="ml-4 grid  content-end bg-white w-3/4 rounded-xl border-amber-400 border-2 text-center">
                            1st, 2023 - 2024
                        </div>
                    </div>
                </div>

                <table className="table-auto border border-amber-400 gap-1">
                    <thead>
                    <tr>
                        <th className="border border-[#DAC898] px-4 py-2 bg-[#DAC898]">Status</th>
                        <th className="border border-[#DAC898] px-4 py-2 bg-[#DAC898]">Tuition Fee</th>
                        <th className="border border-[#DAC898] px-4 py-2 bg-[#DAC898]">Miscellaneous Fee</th>
                        <th className="border border-[#DAC898] px-4 py-2 bg-[#DAC898]">Laboratory Fee</th>
                        <th className="border border-[#DAC898] px-4 py-2 bg-[#DAC898]">Other Fee</th>
                        <th className="border border-[#DAC898] px-4 py-2 bg-[#DAC898]">Date Paid</th>
                        <th className="border border-[#DAC898] px-4 py-2 bg-[#DAC898]">Total</th>
                        {/* Add more headers as needed */}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border border-[#DAC898] px-4 py-2">₱500.00</td>
                        <td className="border border-[#DAC898] px-4 py-2">₱1,200.50</td>
                        <td className="border border-[#DAC898] px-4 py-2">₱750.25</td>
                        <td className="border border-[#DAC898] px-4 py-2">₱900.80</td>
                        <td className="border border-[#DAC898] px-4 py-2">₱1,500.00</td>
                        <td className="border border-[#DAC898] px-4 py-2">₱2,300.75</td>
                        <td className="border border-[#DAC898] px-4 py-2">₱800.50</td>
                        {/* Add more cells as needed */}
                    </tr>
                    <tr>
                        <td className="border border-[#DAC898] px-4 py-2">₱1,000.25</td>
                        <td className="border border-[#DAC898] px-4 py-2">₱600.75</td>
                        <td className="border border-[#DAC898] px-4 py-2">₱1,200.00</td>
                        <td className="border border-[#DAC898] px-4 py-2">₱900.50</td>
                        <td className="border border-[#DAC898] px-4 py-2">₱1,800.25</td>
                        <td className="border border-[#DAC898] px-4 py-2">₱2,500.00</td>
                        <td className="border border-[#DAC898] px-4 py-2">₱950.75</td>
                        {/* Add more cells as needed */}
                    </tr>
                    {/* Add more rows as needed */}
                    </tbody>
                </table>
            </main>
            </div>
        </>
    )
}