import "./Single.css"
import React from 'react'
import SideBar from "../../Components/SideBar/SideBar"
import SinglePost from "../../Components/SinglePost/SinglePost"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

export default function Single() {
  const [post, setPost] = useState([]);
 
const id=window.location.href.split("/")[4]
 useEffect(()=>{
  const fetch = async () => {
    const fetchedPosts = await axios.get(`/posts/${id}`);
     setPost(fetchedPosts.data);
  };
  fetch();
},[id])

  return (




    <div className="single">
        <SinglePost post={post}/>
        <SideBar /> 
    </div>
  )
}
