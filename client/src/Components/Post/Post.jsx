import React from "react";
import Card from "../Card/Card";
import "./Post.css";
import { Link } from "react-router-dom";

export default function Post({
  post: { _id, title, desc, username, categories, createdAt, photo },
}) {
  const random = Math.floor(Math.random() * (98 - 11) + 11);
  const src = "https://source.unsplash.com/random/250x2" + random;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <Card>
      <Link to={`/post/${_id}`}>
        <img src={photo ? photo : src} alt="profile" className="postImg" />
        <div className="postInfo">
          <div className="psdtCats">
            {categories.map((one, i) => (
              <span key={i} className="postCat">
                {one}
              </span>
            ))}
          </div>

          <span className="postTitle"> {title} </span>
          <hr />
          <span className="postDate">
            {" "}
            {new Date(createdAt).toLocaleString("en-US", options)}
          </span>
        </div>

        <p className="postDescription">{desc} </p>
      </Link>
    </Card>
  );
}
