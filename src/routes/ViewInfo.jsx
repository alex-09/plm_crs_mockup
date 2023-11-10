import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";

export default function ViewInfo () {
    return (
    <>
        <Outlet/>
        <SideBar/>
        <main>
            <h1>View Info</h1>
            <p>This is the home page</p>
        </main>
    </>
    );
}
