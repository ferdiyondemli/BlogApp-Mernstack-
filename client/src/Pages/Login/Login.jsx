import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
  import { Context } from "../../context/Context";
import {useState,useContext, useEffect, useRef } from "react";
 
export default function Login () {
  const [isErr, setErr]=useState(false)
  const userRef=useRef()
  const passwordRef=useRef()
  const {  dispatch, isFetching } = useContext(Context);

 
  const submit = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    setErr(false)

    try {
      const { data } = await axios.post("api/auth/login", {
        email:userRef.current.value,
        password:passwordRef.current.value
      });
console.log(data)
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
setErr(true)
      console.log("error :" + error);
    }
  };

   return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email"
          ref={userRef}
          onKeyDown={()=>setErr(false)}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your password"
          ref={passwordRef}
          onKeyDown={()=>setErr(false)}

        />
        <button className="loginButton" onClick={submit} disabled={isFetching}>
          Login
        </button>
        {isErr&&<p style={{color:"red", ["margin-top"]:"5px"}}> Something went wrong</p>}
      </form>
      <Link className="Link" to="/register">
        <button className="loginRegsiterButton">Register</button>
      </Link>
    </div>
  );
}
