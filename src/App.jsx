import { Outlet} from "react-router-dom";
import SideBar from "./SideBar";

function App() {
  return (
    <>
      <Outlet/>
      <SideBar/>
      <main>
        <h1>Dashboard</h1>
        <p>This is the home page</p>
      </main>
    </>
  );
}

export default App;