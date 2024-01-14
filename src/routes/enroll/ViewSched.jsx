export default function ViewSched() {
    return (
        <div className="justify-center w-full  p-5">
                    <div className="justify-start">
                    <table className="border table-fixed w-full shadow-md">
                        <thead className="bg-plm-light-gold">
                        <tr>
                            <th className="border-b border-plm-light-gold">CLASS</th>
                            <th className="border-b border-plm-light-gold">SECTION</th>
                            <th className="border-b border-plm-light-gold">SCHEDULE</th>
                            <th className="border-b border-plm-light-gold">CREDITS</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        <tr>
                            <td className="text-center border border-plm-light-gold">Mathematics 101</td>
                            <td className="text-center border border-plm-light-gold">A</td>
                            <td className="text-center border border-plm-light-gold">Mon/Wed 9:00 AM - 10:30 AM</td>
                            <td className="text-center border border-plm-light-gold">3</td>
                        </tr>
                        <tr>
                            <td className="text-center border border-plm-light-gold">Introduction to Literature</td>
                            <td className="text-center border border-plm-light-gold">B</td>
                            <td className="text-center border border-plm-light-gold">Tue/Thu 1:30 PM - 3:00 PM</td>
                            <td className="text-center border border-plm-light-gold">4</td>
                        </tr>
                        <tr>
                            <td className="text-center border border-plm-light-gold">Computer Science 201</td>
                            <td className="text-center border border-plm-light-gold">C</td>
                            <td className="text-center border border-plm-light-gold">Mon/Fri 10:45 AM - 12:15 PM</td>
                            <td className="text-center border border-plm-light-gold">5</td>
                        </tr>
                        <tr>
                            <td className="text-center border border-plm-light-gold">History of Art</td>
                            <td className="text-center border border-plm-light-gold">A</td>
                            <td className="text-center border border-plm-light-gold">Wed 2:00 PM - 4:00 PM</td>
                            <td className="text-center border border-plm-light-gold">3</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
    )
}