import React from 'react';

function DeletePage({ completeTasks}) {
  return (
    <div className="container my-5 min-vh-100">
      <h2 className="text-center mb-4">Complete Task</h2>

      {completeTasks.length === 0 ? (
        <p className="text-center">No complete tasks.</p>
      ) : (
        <ul className="list-group">
          {completeTasks.map((task, index) => (
            <li key={index} className="list-group-item">
              <h5>{task.taskTitle}</h5>
              <p>{task.taskDescription}</p>
              <p>Priority: {task.priority}</p>
              <p>Due Date: {task.dueDate}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DeletePage;
