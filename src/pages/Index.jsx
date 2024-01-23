import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
