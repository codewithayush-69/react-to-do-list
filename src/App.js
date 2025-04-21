import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import Create from "./pages/create";
import Complete from "./pages/complete";
import Progress from "./pages/progress";
import DeletePage from "./pages/deletePage";

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  const [deletedTasks, setDeletedTasks] = useState(() => {
    const stored = localStorage.getItem("deletedTasks");
    return stored ? JSON.parse(stored) : [];
  });

  const [completedTasks, setCompletedTasks] = useState(() => {
  const stored = localStorage.getItem("completedTasks");
  return stored ? JSON.parse(stored) : [];
});

useEffect(() => {
  localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}, [completedTasks]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  useEffect(() => {
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
  }, [deletedTasks]);
  

  const handleDelete = (indexToDelete) => {
    const deletedTask = tasks[indexToDelete];
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
    setDeletedTasks([...deletedTasks, deletedTask]);
  };

  const handleUndo = (indexToUndo) => {
    const taskToRestore = deletedTasks[indexToUndo];
    const updatedDeleted = deletedTasks.filter((_, i) => i !== indexToUndo);
    setDeletedTasks(updatedDeleted);
    setTasks([...tasks, taskToRestore]);
  };

  const handleRemove = (indexToRemove) => {
    const updatedDeleted = deletedTasks.filter((_, i) => i !== indexToRemove);
    setDeletedTasks(updatedDeleted);
  };

  const handleComplete = (indexToComplete) => {
    const completedTask = tasks[indexToComplete];
    tasks.filter((_, index) => index !== indexToComplete);
    setCompletedTasks([...completedTasks, completedTask]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/create"
          element={<Create tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/progress"
          element={
            <Progress
              completeBtn={handleComplete}
              deleteBtn={handleDelete}
              tasks={tasks}
            />
          }
        />
        <Route
          path="/complete"
          element={<Complete completeTasks={completedTasks} />}
        />
        <Route
          path="/delete"
          element={
            <DeletePage
              deletedTasks={deletedTasks}
              undoBtn={handleUndo}
              removeBtn={handleRemove}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
