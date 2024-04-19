import React, { useState } from "react";
import TitleIcon from "../assets/TitleLogo.svg"; // Assuming this is your icon
import Edit from "../assets/edit.svg"; // Assuming this is your icon

import { ReactComponent as A } from "../assets/Calendar.svg";
import { ReactComponent as C} from "../assets/Category.svg";
import { ReactComponent as DM} from "../assets/Chat.svg";
import { ReactComponent as R } from "../assets/Document.svg";
import { ReactComponent as S} from "../assets/Setting.svg";
import { ReactComponent as L} from "../assets/Logout.svg";



import { FaTh, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Reports from "../pages/Reports";
import Appointments from "../pages/Appointments";
import Overview from "../pages/Overview";
import DirectMessaging from "../pages/DirectMessaging";
import Logout from "../pages/Logout";
import Settings from "../pages/Settings"


const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Overview");

  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    { path: "/Overview", name: "Overview", icon: <C/> },
    { path: "/Appointments", name: "Appointments", icon: <A/> },
    { path: "/Reports", name: "Reports", icon: <R/> },
    { path: "/DirectMessaging", name: "DirectMessaging", icon: <DM /> },
    { path: "/Settings", name: "Settings", icon: <S/> },
    { path: "/Logout", name: "Logout", icon: <L/> },
  ];

  const handleNavLinkClick = (index) => {
    setActiveComponent(menuItem[index].name);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Overview":
        return <Overview/>;
      case "Appointments":
        return <Appointments/>;
      case "Reports":
        return <Reports/>;
      case "DirectMessaging":
        return <DirectMessaging />;
      case "Settings":
        return <Settings/>;
      case "Logout":
        return <Logout/>;
      default:
        return <Overview/>;
    }
  };
  return (
    <div className="container">
      <div style={{ width: isOpen ? "280px" : "50px", padding: "10px" }} className="sidebar">
        <div className="top_section">
          {isOpen && (
            <div style={{ width: "80%" }}>
              <img src={TitleIcon} className="img-fluid" alt="Clik Care Logo" />
            </div>
          )}
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="profile_box" style={{ backgroundColor: "#F7F9FD", padding: "10px", marginBottom: "10px", borderRadius: "10px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "10px" }}>
              <img src="https://via.placeholder.com/150" className="profile_image" alt="Profile" style={{ borderRadius: "50%", width: "50px", height: "50px" }} />
            </div>
            {isOpen && (
              <div>
                <div style={{ fontWeight: "bold" }}>Username</div>
                <div>ID: 123456</div>
              </div>
            )}
            {isOpen && (
              <div style={{ marginLeft: "auto" }}>
                <button style={{ border: "None", background: "None" }}><img src={Edit} /></button>
              </div>
            )}
          </div>
        </div>

        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
            onClick={() => handleNavLinkClick(index)}
            style={{ textDecoration: 'none' }}
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main style={{ margin: "30px", borderRadius: "30px", backgroundColor: "#F7F9FD" }}>
        {renderActiveComponent()}
      </main>
    </div>
  );
};

export default Sidebar;