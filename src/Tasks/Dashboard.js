import React, { useState } from "react";
import SideNav from "../pages/SideNav";
import MainHeader from "../Tasks/MainHeader";
import "./tasks.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Dashboard = ({ todo, setTodo }) => {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };

  const [values, setValues] = useState({
    heading: "",
    brief: "",
    date: "",
    important: false,
    ongoing: false,
    completed: false,
  });

  const handleValidation = () => {
    if (!values.heading || !values.brief || !values.date) {
      toast.error("Fill all fields", toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const taskWithId = { ...values, id: uuidv4() };
      setTodo((prevTodo) => [...prevTodo, taskWithId]);
      toast.success("Task added successfully!", toastOptions);
      setValues({
        heading: "",
        brief: "",
        date: "",
        important: false,
        ongoing: false,
        completed: false,
      });
    }
  };

  return (
    <>
      <div className="dash-container">
        <SideNav />
        <div className="dash-content">
          <MainHeader />
          <div className="dash-form">
            <h2>Add Your Tasks!</h2>
            <form onSubmit={handleSubmit}>
              <input
                className="dash-form-input"
                name="heading"
                type="text"
                value={values.heading}
                onChange={handleChange}
                placeholder="Add heading"
              />
              <textarea
                className="dash-form-textarea"
                name="brief"
                rows="10"
                cols="64"
                value={values.brief}
                onChange={handleChange}
                placeholder="Enter your tasks here..."
              ></textarea>
              <input
                className="dash-form-date"
                type="date"
                name="date"
                value={values.date}
                onChange={handleChange}
              />
              <div className="checkbox">
                <label htmlFor="important">Important!</label>
                <input
                  type="checkbox"
                  id="important"
                  name="important"
                  checked={values.important}
                  onChange={handleChange}
                />
                <label htmlFor="ongoing">Ongoing</label>
                <input
                  type="checkbox"
                  id="ongoing"
                  name="ongoing"
                  checked={values.ongoing}
                  onChange={handleChange}
                />
                <label htmlFor="completed">Completed</label>
                <input
                  type="checkbox"
                  id="completed"
                  name="completed"
                  checked={values.completed}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Dashboard;
