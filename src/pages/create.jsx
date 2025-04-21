import React, { useState } from "react";

function Create({ tasks, setTasks }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const today = new Date();
    const selectedDate = new Date(dueDate);
  
    if (selectedDate < new Date(today.setHours(0, 0, 0, 0))) {
      alert("Please select a valid future date.");
      return;
    }
  
    const newTask = {
      taskTitle,
      taskDescription,
      priority,
      dueDate,
    };
  
    setTasks([...tasks, newTask]);
  
    setTaskTitle("");
    setTaskDescription("");
    setPriority("");
    setDueDate("");
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Create New Task</h2>
      <form
        className="p-4 border rounded bg-light shadow-sm"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="taskTitle" className="form-label">
            Task Title
          </label>
          <input
            type="text"
            className="form-control"
            id="taskTitle"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Enter task name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="taskDescription"
            rows="3"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Enter task details"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="priority" className="form-label">
            Priority
          </label>
          <select
            className="form-select"
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">
            Due Date
          </label>
          <input
            type="date"
            className="form-control"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default Create;
