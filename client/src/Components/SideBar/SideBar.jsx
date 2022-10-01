import React from "react";
import "./SideBar.css";
import Card from "../SideCard/Card";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function SideBar() {
  const [cat, setCat]=useState([])
const {user}=useContext(Context)
  useEffect(()=>{
    const fetch = async () => {
      const fetchedPosts = await axios.get("api/categories");
      console.log(fetchedPosts.data);
       setCat(fetchedPosts.data);
    };
    fetch();
  },[])
  return (
    <Card className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/originals/b0/ce/58/b0ce58dd857fd763c6d610d5f962a520.jpg"
          alt=""
        />
        <p>
        {user&&user.aboutMe?<>{user.aboutMe}<Link to={"/settings"}><i className="singlePostIcon fa-solid fa-pen" ></i></Link></>
        
        
        : (<Link to={"/settings"}>.... here is empty now. Could tell us about you more</Link> )}
          
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEORIES</span>
        <ul className="sideBarList">
          {cat&&cat.map((one,i)=> <li key={i} className="sideBarListItem"><Link to={"/?cat="+one.name}>{one.name}</Link></li> )}
          
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
