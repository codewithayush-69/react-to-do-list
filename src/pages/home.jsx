import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'; 

function Home() {
  return (
    <div className="container mt-5 text-center min-vh-100 home ">
      <h1 className="mb-4">Welcome to the To-Do List App ✅</h1>
      <p className="lead mb-4">
        Organize your tasks, stay productive, and track your progress easily.
      </p>
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <Link to="/create" className="btn btn-primary">➕ Create Task</Link>
        <Link to="/progress" className="btn btn-warning">🔄 View In Progress</Link>
        <Link to="/complete" className="btn btn-success">✅ Completed</Link>
        <Link to="/delete" className="btn btn-danger">🗑️ Deleted</Link>
      </div>
    </div>
  );
}

export default Home;
