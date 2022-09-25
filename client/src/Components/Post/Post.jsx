import React from "react";
import Card from "../Card/Card";
import "./Post.css";

export default function Post() {
  const src =
    "https://source.unsplash.com/random/250x2" +
    Math.floor(Math.random() * (98 - 11) + 11);
  return (
    <Card className="post">
      <img src={src} alt="" className="postImg" />
      <div className="postInfo">
        <div className="psdtCats">
          <span className="postCat">Life</span>
          <span className="postCat">Musice</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit </span>
        <hr />
        <span className="postDate"> a hour age</span>
      </div>
      <p className="postDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quia rem eaxpedita quia rem eaxpedita quia rem eaxpedita quia rem eaxpedita quia rem eaxpedita quia rem eaxpedita quia rem eaxpedita quia rem eaxpedita quia rem. eaxpedita quia rem earum ad facilis voluptates nisi itaque blanditiis aut temporibus numquam. veniam commodi tempora nemo odio cupiditate, hic excepturi sequi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora accusantium error corporis perferendis deleniti sunt, earum maxime alias asperiores. Perferendis explicabo sapiente pariatur sunt ab odio ullam, amet mollitia placeat.</p>
    </Card>
  );
}
