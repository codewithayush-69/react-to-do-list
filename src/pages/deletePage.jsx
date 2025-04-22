import React from "react";

function DeletePage({ deletedTasks, undoBtn, removeBtn }) {
  return (
    <div className="container my-5 min-vh-100">
      <h2 className="text-center mb-4">🗑️ Deleted Tasks</h2>

      {deletedTasks.length === 0 ? (
        <p className="text-center">No deleted tasks.</p>
      ) : (
        <ul className="list-group">
          {deletedTasks.map((task, index) => (
            <li key={index} className="list-group-item">
              <h5>{task.taskTitle}</h5>
              <p>{task.taskDescription}</p>
              <p>Priority: {task.priority}</p>
              <p>Due Date: {task.dueDate}</p>
              <button
                className="btn btn-success me-3"
                onClick={() => undoBtn(index)}
              >
                undo
              </button>
              <button
                className="btn btn-danger"
                onClick={() => removeBtn(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DeletePage;
