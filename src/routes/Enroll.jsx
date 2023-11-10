import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";

export default function Enroll () {
    return (
    <>
        <Outlet/>
        <SideBar/>
        <main>
            <h1>Enroll</h1>
            <p>This is the home page</p>
        </main>
    </>
    );
}
