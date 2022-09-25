import React from "react";
import "./SideBar.css";
import Card from "../SideCard/Card";

export default function SideBar() {
  return (
    <Card className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/originals/b0/ce/58/b0ce58dd857fd763c6d610d5f962a520.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem reprehenderit voluptatibus debitis, velit doloremque
          aperiam culpa commodi eaque. Voluptatum, cum. Voluptas reprehenderit
           
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEORIES</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">army</li>
          <li className="sideBarListItem">life</li>
          <li className="sideBarListItem">food</li>
          <li className="sideBarListItem">government</li>
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-twitter"></i>
          <i className="sideBarIcon fa-brands fa-facebook"></i>
          <i className="sideBarIcon fa-brands fa-pinterest-p"></i>
          <i className="sideBarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </Card>
  );
}
