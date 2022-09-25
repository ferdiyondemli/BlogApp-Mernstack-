import "./Settings.css";
import SideBar from "../../Components/SideBar/SideBar";

export default function Settings() {
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
            <i class="settingsPPIcon fa-solid fa-user"></i>
          </label>

          <input type="file" id="fileInput" style={{ display: "none" }} />
        </div>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="your name" />
        <label htmlFor="">email</label>
        <input type="text" placeholder="your email" />
        <label htmlFor="">Password</label>
        <input type="text" placeholder="your Password" />
        <button className="settingsSubmit">Update</button>
      </form>
      </div>
      <SideBar />
    </div>
  );
}
