import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./authentication.css";
import Header from "../pages/Header";

const Login = () => {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };
  const [values, setValues] = useState({ username: "", password: "" });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Username  is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error(" Password is required.", toastOptions);
      return false;
    }
    return true;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      toast.success("hello", toastOptions);
      navigate("/mainpage");
    }
  };
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="auth-container">
          <form onSubmit={(event) => handleSubmit(event)} className="auth-form">
            <div className="auth-title">
              <img src={logo} alt="logo" />
              <h1>Todo-fy</h1>
            </div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => handleChange(e)}
              min="3"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <button type="submit">Log In</button>
            <span>
              Don't have an account ? <Link to="/register">Create One.</Link>
            </span>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
