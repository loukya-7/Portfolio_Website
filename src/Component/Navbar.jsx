import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Global.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  
  return (
    <>
        <nav className="fixed top-0 left-0 right-0 w-screen h-24 border-b border-black flex justify-around items-center shadow-md" style={{ background: "white" }}>

        <div className="p-2">
          <h3 className="text-3xl font-bold  text-black"><NavLink className="hover:text-blue-800" to="/">MyPortfolio</NavLink></h3>
        </div>

        <div className="h-12 w-50 Right-Navbar">
          <ul className="flex items-center justify-between p-2 text-2xl font-serif text-black text-nowrap cursor-pointer">
            <li><NavLink to="/" className="hover:text-blue-800">Home</NavLink></li>
            <li className="ml-5"><NavLink to="/Skills" className="hover:text-blue-800">Skills</NavLink></li>
            <li className="ml-5"><NavLink to="/About" className="hover:text-blue-800">About Me</NavLink></li>
            <li className="ml-5"><NavLink to="/Project" className="hover:text-blue-800">Projects</NavLink></li>
            <li className="ml-5"><NavLink to="/Contact" className="hover:text-blue-800">Contact</NavLink></li>
            <FaBars className="text-4xl Menu-icon" onClick={() => setMenu(!menu)} />
          </ul>
        </div>
      </nav>

      <div className={`fixed top-0 right-0 h-screen w-52 p-3 border-l border-black ${menu === false ? "hidden" : "block"}`} style={{ background: "linear-gradient(0.3deg, rgb(30, 161, 239) 0.9%, rgb(49, 46, 252) 88.6%)" }}>
        <ul className="flex justify-between flex-col items-center pt-2 text-lg font-serif text-white text-nowrap cursor-pointer gap-3">
          <li><NavLink to="/" className="hover:text-red-400" onClick={() => setMenu(false)}>Home</NavLink></li>
          <li><NavLink to="/Skills" className="hover:text-red-400" onClick={() => setMenu(false)}>Skills</NavLink></li>
          <li><NavLink to="/About" className="hover:text-red-400" onClick={() => setMenu(false)}>About Me</NavLink></li>
          <li><NavLink to="/Project" className="hover:text-red-400" onClick={() => setMenu(false)}>Projects</NavLink></li>
          <li><NavLink to="/Contact" className="hover:text-red-400">Contact</NavLink></li>
          <FaTimes className="text-4xl absolute top-0 right-0 hover:text-red-500" onClick={() => setMenu(false)} />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
