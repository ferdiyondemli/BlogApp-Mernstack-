import { useRef } from "react";
import "./Write.css";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Write() {
  const src =
    "https://source.unsplash.com/random/250x2" +
    Math.floor(Math.random() * (98 - 11) + 11);

  const titleRef = useRef();
  const postRef = useRef();
  const { user } = useContext(Context);
  const submit = async (e) => {
    e.preventDefault();
    const post = {
      title: titleRef.current.value,
      desc: postRef.current.value,
      username: user.username,
      categories: "rome",
    };
    console.log(post);
    try {
      const { data } = await axios.post("/posts", post);
      console.log(data);
      window.location.replace(`/post/${data._id}`);
    } catch (error) {
      console.log("error:  " + error);
    }
  };

  return (
    <div className="write">
      <img src={src} alt="" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeFormIcon fa-solid fa-file-circle-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            className="writeInput"
            ref={titleRef}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your things..."
            type="text"
            id=""
            cols="30"
            rows="10"
            className="writeInput writeText"
            ref={postRef}
          ></textarea>
        </div>
        <button className="writeSubmit" onClick={submit}>
          Publish
        </button>
      </form>
    </div>
  );
}
