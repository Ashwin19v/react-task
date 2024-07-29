import React, { useState } from "react";
import SideNav from "../pages/SideNav";
import "./tasks.css";
import MainHeader from "./MainHeader";
const Ongoing = ({ todo, setTodo }) => {
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [editHeading, setEditHeading] = useState("");
  const [editBrief, setEditBrief] = useState("");
  const handleSortByOrder = () => {
    setSortOrder("order");
  };

  const handleSortByDate = () => {
    setSortOrder("date");
  };
  const deleteTodo = (id) => {
    const updatedTodos = todo.filter((todo) => todo.id !== id);
    setTodo(updatedTodos);
  };
  let ongoingTasks = todo.filter((task) => task.ongoing);

  if (sortOrder === "order") {
    ongoingTasks = ongoingTasks
      .slice()
      .sort((a, b) => a.heading.localeCompare(b.heading));
  } else if (sortOrder === "date") {
    ongoingTasks = ongoingTasks
      .slice()
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  const startEditing = (task) => {
    setEditingTask(task.id);
    setEditHeading(task.heading);
    setEditBrief(task.brief);
  };

  const saveEdit = (id) => {
    const updatedTodos = todo.map((task) =>
      task.id === id
        ? { ...task, heading: editHeading, brief: editBrief }
        : task
    );
    setTodo(updatedTodos);
    setEditingTask(null);
    setEditHeading("");
    setEditBrief("");
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setEditHeading("");
    setEditBrief("");
  };

  const filteredTasks = ongoingTasks.filter((task) =>
    task.heading.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="ongoing-container">
      <SideNav />
      <div className="ongoing-content">
        <MainHeader />
        <h2>ongoing Tasks</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Search Heading"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          ></input>
          <button onClick={handleSortByDate}>Sort by Date</button>
          <button onClick={handleSortByOrder}>Sort by Order</button>
        </div>
        <div className="todo-content">
          {filteredTasks.map((task) => (
            <div className="todo-tasks" key={task.id}>
              {editingTask === task.id ? (
                <div className="edit-task-form">
                  <input
                    type="text"
                    value={editHeading}
                    onChange={(e) => setEditHeading(e.target.value)}
                  />
                  <textarea
                    rows="7"
                    cols="33"
                    value={editBrief}
                    onChange={(e) => setEditBrief(e.target.value)}
                  />
                  <div className="edit-btns">
                    <button onClick={() => saveEdit(task.id)}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <h2>{task.heading}</h2>
                  <h5>Published on 11:11:01 12.3.24</h5>
                  <div className="task-brief">{task.brief}</div>
                  <h5 className="todo-date">{task.date}</h5>
                  <div className="task-btns">
                    <button onClick={() => startEditing(task)}>EDIT</button>
                    <button onClick={() => deleteTodo(task.id)}>DELETE</button>
                    <button>
                      COMPLETED
                      <input type="checkbox" />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
