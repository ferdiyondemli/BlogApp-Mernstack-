import "./Settings.css";
import SideBar from "../../Components/SideBar/SideBar";
import { useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { useRef } from "react";

export default function Settings() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const aboutMeRef = useRef();

  const { user, dispatch } = useContext(Context);

  const updateg = async (e) => {
    e.preventDefault();
    console.log(`/users/${user._id}`);
    try {
      const { data } = await axios({
        method: "put",
        url: `/users/${user._id}`,
        data: {
          userId: user._id,
          username: nameRef.current.value || user.username,
          email: emailRef.current.value || user.email,
          password: passwordRef.current.value || user.password,
          aboutMe: aboutMeRef.current.value || user.aboutMe,
        },
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: data });

      window.location.reload();
    } catch (error) {}
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>

        <form className="settingsForm">
          <label htmlFor="">Profil Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=100&q=80"
              alt=""
              className="settingsPP"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>

            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label htmlFor="username">Username</label>
          <input id="username" placeholder={user.username} ref={nameRef} />
          <label htmlFor="email">email</label>
          <input id="email" placeholder={user.email} ref={emailRef} />
          <label htmlFor="Password">Password</label>
          <input id="Password" placeholder="your Password" ref={passwordRef} />
          <label htmlFor="aboutMe">About me</label>

          <textarea id="aboutMe" placeholder={user.aboutMe} ref={aboutMeRef} />
          <button className="settingsSubmit" onClick={updateg}>
            Update
          </button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
