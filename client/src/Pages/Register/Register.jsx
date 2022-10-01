import "./Register.css";
import { useState } from "react";
import axios from "axios";
import React from "react";
import Login from "../Login/Login";
import { Link, Route, Routes } from "react-router-dom";

export default function Register() {
  const [info, setInfo] = useState({ username: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const [first, setFirst] = useState(true);

  const onChange = (e) => {
    let newInfo = info;

    newInfo[e.target.name] = e.target.value;

    setInfo((pre) => newInfo);
  };

  const submit = async (e) => {
    e.preventDefault();
    setErr("");

    try {
      const { data } = await axios.post("api/auth/register", info);
      // data.message ? setErr(data.message) : window.location.replace("/login");
      data.message? setErr(data.message) :setFirst(false)


    } catch (error) {
      console.log("error :" + error);
    }
  };
if(!first){ 
  return(<Login isFromLogin={true} email={info.email} password={info.password}/>)
}
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username"
          onChange={onChange}
          name="username"
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email"
          name="email"
          onChange={onChange}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your password"
          name="password"
          onChange={onChange}
        />
        <button className="registerButton" onClick={submit}>
          Register{" "}
        </button>
      </form>
       <Link className="Link" to="/login">
        <button className="registerLoginButton">Login</button>
      </Link>
      {err ? (
        <p style={{ color: "red", marginTop: "10px" }}> {err}</p>
      ) : (<p> </p>)}
    </div>
  );
}
