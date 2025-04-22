import React from "react";

function Progress({ tasks, deleteBtn, completeBtn }) {
  return (
    <div className="container min-vh-100 my-5">
      <h2 className="text-center mb-4">In Progress Tasks</h2>

      {tasks.length === 0 ? (
        <p className="text-center">No tasks in progress.</p>
      ) : (
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li key={index} className="list-group-item mt-5 ">
              <h5>{task.taskTitle}</h5>
              <p>{task.taskDescription}</p>
              <p>Priority: {task.priority}</p>
              <p>Due Date: {task.dueDate}</p>
              <button
                className="btn btn-success me-2"
                onClick={() => completeBtn(index)}
              >
                Complete
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteBtn(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Progress;
