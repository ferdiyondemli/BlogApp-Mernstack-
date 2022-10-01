import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import SideBar from "../../Components/SideBar/SideBar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
   let location = useLocation().search;
    useEffect(() => {

    const fetch = async () => {
      const fetchedPosts = await axios.get("posts"+location);
      setPosts(fetchedPosts.data);
    };
    fetch();
  }, [location]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts   all={posts} />
        <SideBar />
      </div>
    </>
  );
}
