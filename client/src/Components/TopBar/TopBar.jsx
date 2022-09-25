import React from "react";
import "./TopBar.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topleft">
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-pinterest-p"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="topListItem">
            <Link className="Link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link className="Link" to="/about">ABOUT</Link>{" "}
          </li>
          <li className="topListItem">
            {" "}
            <Link className="Link" to="/contact">CONTACT</Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link className="Link" to="/write">WRITE</Link>
          </li>
          <li className="topListItem">
            {user?(<Link className="Link" to="/logout">LOGOUT</Link>):("")            
}
          </li>
        </ul>
      </div>
      <div className="topright">
        {user?( <img
          className="topImg"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="Your"
        />):(<>
        <Link className="Link topListItem" to="/register">REGISTER</Link>
        <Link className="Link topListItem" to="/login">LOGIN</Link>
        </>)}
        
       
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
