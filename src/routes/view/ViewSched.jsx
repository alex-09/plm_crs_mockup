import downl from "../../assets/dl.png";
export default function ViewSched() {
    return (
        <div className="justify-center w-full  p-5">
                    <div className="justify-start">
                    <table className="border table-fixed w-full shadow-md">
                        <thead className="bg-plm-light-gold">
                        <tr>
                            <th className="border-b border-plm-light-gold">DATE</th>
                            <th className="border-b border-plm-light-gold">GWA</th>
                            <th className="border-b border-plm-light-gold">COMPILE</th>
                            <th className="border-b border-plm-light-gold">STATUS</th>
                            <th className="border-b border-plm-light-gold">ACTION</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        <tr>
                            <td className="text-center border border-plm-light-gold">2022-2023</td>
                            <td className="text-center border border-plm-light-gold">5</td>
                            <td className="text-center border border-plm-light-gold">NONE</td>
                            <td className="text-center border border-plm-light-gold">PASSED</td>
                            
                            <td className="text-center border border-plm-light-gold "><button><img src={downl} width="10px" className="mx-auto" alt="" /></button></td>
                        </tr>
                        <tr>
                            <td className="text-center border border-plm-light-gold">2024-2025</td>
                            <td className="text-center border border-plm-light-gold">5</td>
                            <td className="text-center border border-plm-light-gold">NONE</td>
                            <td className="text-center border border-plm-light-gold">PASSED</td>
                            
                            <td className="text-center border border-plm-light-gold "><button><img src={downl} width="10px" className="mx-auto" alt="" /></button></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
    )
}