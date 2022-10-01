import React from "react";
import "./Posts.css";
import Post from "../Post/Post";

export default function Posts({all}) {
  return (
    <div className="posts">
      {all.map((post, i) => (
        <Post key={i}  post={post} />
      ))}

    
    </div>
  );
}
