import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <p className="navbar-brand text-light">To Do List</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link text-light" to="/create">Create</Link>
                        <Link className="nav-link text-light" to="/progress">Progress</Link>
                        <Link className="nav-link text-light" to="/complete">Complete</Link>
                        <Link className="nav-link text-light" to="/delete">Delete</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
