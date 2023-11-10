import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";

export default function Classroom () {
    return (
    <>
        <Outlet/>
        <SideBar/>
        <main>
            <h1>Classroom</h1>
            <p>This is the home page</p>
        </main>
    </>
    );
}
