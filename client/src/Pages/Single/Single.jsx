import "./Single.css"
import React from 'react'
import SideBar from "../../Components/SideBar/SideBar"
import SinglePost from "../../Components/SinglePost/SinglePost"

export default function Single() {
  return (
    <div className="single">
        <SinglePost />
        <SideBar /> 
    </div>
  )
}
