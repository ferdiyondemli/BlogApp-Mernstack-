import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { Context } from "../../context/Context";
import { useState, useContext, useEffect, useRef } from "react";

export default function Login() {
  const [isErr, setErr] = useState(false);
  const userRef = useRef();
  const passwordRef = useRef();
  const [password, setPassword] = useState("password");
  const [email, setEmail] = useState("admin");
  const { dispatch, isFetching } = useContext(Context);

  const submit = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    setErr(false);

    try {
      const { data } = await axios.post("api/auth/login", {
        email,
        password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      setErr(true);
      console.log("error :" + error);
    }
  };
  const double = (e) => {
    {
      setErr(false);
      setPassword(e.target.value);
      setEmail(e.target.value);
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
          onChange={(e) =>  {
            setErr(false);
             setEmail(e.target.value);
          }}
          value={email}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password"
          onChange={(e) =>  {
            setErr(false);
            setPassword(e.target.value);
           }}
          value={password}
        />
        <button className="loginButton" onClick={submit} disabled={isFetching}>
          Login
        </button>
        {isErr && (
          <p style={{ color: "red", ["margin-top"]: "5px" }}>
            {" "}
            Something went wrong
          </p>
        )}
      </form>

      <div className="bottomlink">
        If you need an account, please{" "}
        <Link className="Link loginRegsiterButton" to="/register">
          Register here{" "}
        </Link>
      </div>
    </div>
  );
}
