import {useState} from 'react';
import logo from "./assets/logo.png";
import { Outlet, NavLink } from "react-router-dom";

//nav icons
import dashboard from "./assets/icons/navigation/dashboard.svg";
import filled_dashboard from "./assets/icons/navigation/filled_dashboard.svg";
import enroll from "./assets/icons/navigation/enroll.svg";
import filled_enroll from "./assets/icons/navigation/filled_enroll.svg";
import view_info from "./assets/icons/navigation/view_info.svg";
import filled_view_info from "./assets/icons/navigation/filled_view_info.svg";
import classroom from "./assets/icons/navigation/classroom.svg";
import filled_classroom from "./assets/icons/navigation/filled_classroom.svg";
import account from "./assets/icons/navigation/account.svg";
import filled_account from "./assets/icons/navigation/filled_account.svg";
import logout from "./assets/icons/navigation/logout.svg";


function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const openSideBar = () => {
    setIsOpen(!isOpen);
    console.log("Open Sidebar Button clicked (expanded=" + !isOpen + ")") //debugging
  }

  const sidebarClass = isOpen ? 'is-expanded' : 'false';

  return (
    <aside className={`${sidebarClass}`}>
      <div className="logo">
          <img src={logo} width="65" height="59" alt="PLM" onError={(e) => console.error('Image load error', e)}/>
      </div>

      {/* <div className="menu-toggle-wrap">
          <button className="menu-toggle" onClick={openSideBar}>
              <span className="material-icons">
                  keyboard_double_arrow_right
              </span>
          </button>
      </div> */}

         
      <div className="menu">
        <NavLink to="/" className="linkStyle">
            {({ isActive}) => (
                <button className="button" onClick={openSideBar}>
                    <img className="material-icons" src={isActive ? filled_dashboard : dashboard} alt="dashboard"/>
                    <span className="text">Dashboard</span>
                </button>
            )}
        </NavLink>   
        <NavLink to="/enroll" className="linkStyle">
            {({ isActive}) => (
                <button className="button" onClick={openSideBar}>
                    <img className="material-icons" src={isActive ? filled_enroll : enroll} alt="enroll"/>
                    <span className="text">Enroll</span>
                </button>
            )}
        </NavLink>
        <NavLink to="/view_info" className="linkStyle">
            {({ isActive}) => (
                <button className="button" onClick={openSideBar}>
                    <img className="material-icons" src={isActive ? filled_view_info : view_info} alt="view info"/>
                    <span className="text">View Info</span>
                </button>
            )}
        </NavLink>
        <NavLink to="/classroom" className="linkStyle">
            {({ isActive}) => (
                <button className="button" onClick={openSideBar}>
                    <img className="material-icons" src={isActive ? filled_classroom : classroom} alt="classroom"/>
                    <span className="text">Classroom</span>
                </button>
            )}
        </NavLink>
        <NavLink to="/account" className="linkStyle">
            {({ isActive}) => (
                <button className="button" onClick={openSideBar}>
                    <img className="material-icons" src={isActive ? filled_account : account} alt="account"/>
                    <span className="text">Account</span>
                </button>
            )}
        </NavLink>
      </div>

      <div className="flex"></div>

      <div className="menu">
        <NavLink to="/" className="linkStyle">
            {({ isActive}) => (
                <button className="button" onClick={openSideBar}>
                    <img className="material-icons" src={isActive ? logout : logout} alt="logout"/>
                    <span className="text">Logout</span>
                </button>
            )}
        </NavLink>
      </div>
    </aside>
  )
}
// hover open sidebar
export default SideBar;