import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Change from "../Change.jsx/Change";


export default function Navbar() {
  const [activeItem, setActiveItem] = useState(null);
  let [inputName, setName] = useState("Home");

  const handleItemClick = (itemIndex) => {
    setActiveItem(itemIndex);
  };

  useEffect(() => {
    // Call handleItemClick with the initial index (e.g., 0 for the first item)
    handleItemClick(0);
  }, []); // Empty dependency array means this will run once when the component is mounted

  const menuItems = [
    { to: "Home", icon: "fa-solid fa-house", text: "Home" },
    { to: "About", icon: "fa-solid fa-user", text: "About Me" },
    { to: "Project", icon: "fa-solid fa-bars-progress", text: "Project" },
    { to: "MYSkills", icon: "fa-solid fa-code", text: "MY Skills" },
    { to: "Contact", icon: "fa-solid fa-comment", text: "Contact" }
  ];

  return (
    <>
      <div className="navigation">
        <ul>
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className={`list ${index === activeItem ? "active" : ""}`}
            >
              <Link
                to={menuItem.to}
                onClick={() => {
                  handleItemClick(index);
                  setName(menuItems[index].text);
                }}
              >
                <span className="icon">
                  <i className={menuItem.icon}></i>
                </span>
                <span className="text">{menuItem.text}</span>
                <span className="circle"></span>
              </Link>
            </li>
          ))}
          <div className="indicator"></div>
        </ul>
      </div>
    
      <div>
        <Change re={inputName} />
      </div>
    </>
  );
}
