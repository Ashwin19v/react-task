import "./App.css";
import { useState } from "react";
// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import Home from "./pages/Home";
import MainHome from "./pages/MainHome";
import Dashboard from "./Tasks/Dashboard";
import Important from "./Tasks/Important";
import Ongoing from "./Tasks/Ongoing";
import Completed from "./Tasks/Completed";
function App() {
  const [todo, setTodo] = useState([]);
  return (
    <>
      {/* {<img src={logo} className="App-logo" />} */}
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/mainpage" element={<MainHome />} />
          <Route
            path="/dashboard"
            element={<Dashboard todo={todo} setTodo={setTodo} />}
          />
          <Route
            path="/completed"
            element={<Completed todo={todo} setTodo={setTodo} />}
          />
          <Route
            path="/important"
            element={<Important todo={todo} setTodo={setTodo} />}
          />
          <Route
            path="/ongoing"
            element={<Ongoing todo={todo} setTodo={setTodo} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
