import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";

export default function Account () {
    return (
    <>
        <Outlet/>
        <SideBar/>
        <main>
            <h1>Account</h1>
            <p>This is the home page</p>
        </main>
    </>
    );
}
