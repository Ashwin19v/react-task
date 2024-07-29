import React, { useState } from "react";
import logo from "../logo.svg";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./authentication.css";
import Header from "../pages/Header";

const Register = () => {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 4) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidation()) {
      toast.success("hello", toastOptions);
      navigate("/login");
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
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={(e) => handleChange(e)}
            />

            <button type="submit">Create User</button>

            <span>
              Already have an account ? <Link to="/login">Login.</Link>
            </span>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Register;
