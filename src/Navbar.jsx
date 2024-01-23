import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const sidebarItems = [
    { path: "/", label: "Dashboard" },
    { path: "/documents", label: "Documents" },
    { path: "/users", label: "Users" },
  ];

  return (
    <div id="sidebar">
      <nav>
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index} onClick={() => navigate(item.path)}>
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
