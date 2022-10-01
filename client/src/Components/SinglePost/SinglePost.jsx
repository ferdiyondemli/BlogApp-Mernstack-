import "./SinglePost.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { useState } from "react";
import { useRef } from "react";
export default function SinglePost({ post }) {
  const titleRef = useRef();
  const descRef = useRef();
  const [updateMode, setMode] = useState(false);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const { user } = useContext(Context);
  const src =
    "https://source.unsplash.com/random/250x2" +
    Math.floor(Math.random() * (98 - 11) + 11);

  const change = async () => {
    try {
      const { data } = await axios({
        method: "put",
        url: `api/posts/${post._id}`,
        data: {
          username: user.username,
          title: titleRef.current.textContent,
          desc: descRef.current.textContent,
        },
      });
      window.location.replace(`/post/${post._id}`);

    } catch (error) {}
  };

  const onDel = async () => {
    try {
      await axios({
        method: "delete",
        url: `api/posts/${post._id}`,
        data: {
          username: user.username,
        },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={post.photo ? post.photo : src}
          alt="Single Post"
        />
        {updateMode ? (
          <h1
            ref={titleRef}
            className="singlePostTitle"
            contentEditable="true"
            suppressContentEditableWarning={true}
            style={{ ["border"]: "1px dashed red" }}
          >
            {post.title}{" "}
          </h1>
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            {user&&user.username === post.username && (
              <div className="singlePostEdit" >
                <i className="singlePostIcon fa-solid fa-pen"onClick={() => setMode(true)}></i>
                <i
                  onClick={onDel}
                  className="singlePostIcon fa-solid fa-trash"
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            author:
            <Link to={"/?user=" + post.username}>{post.username}</Link>{" "}
          </span>
          <span className="singlePostDate">
            {" "}
            {new Date(post.createdAt).toLocaleString("en-US", options)}
          </span>
        </div>
        {updateMode ? (
          <p
            ref={descRef}
            className="singlePostDescription"
            contentEditable="true"
            suppressContentEditableWarning={true}
            style={{ ["border"]: "1px dashed red" }}
          >
            {post.desc}
          </p>
        ) : (
          <p className="singlePostDescription">{post.desc}</p>
        )}
        {updateMode && (
          <button className="loginButton" onClick={change}>
            change
          </button>
        ) }
      </div>
    </div>
  );
}
