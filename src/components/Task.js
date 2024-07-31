import React, { useState } from "react";
import "./Task.css"; // Import CSS file

const Task = ({ task, onUpdate, onComplete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleComplete = (e) => {
    e.stopPropagation();
    onComplete(task.id);
  };

  const handleUpdate = (e) => {
    e.stopPropagation();
    const updatedTitle = prompt("Update title", task.title);
    const updatedDescription = prompt("Update description", task.description);
    if (updatedTitle && updatedDescription) {
      onUpdate(task.id, {
        title: updatedTitle,
        description: updatedDescription,
      });
    }
  };

  return (
    <div
      className={`task ${task.completed ? "completed" : ""}`}
      onClick={handleToggle}
    >
      <div className="task-header">
        <h3>{task.title}</h3>
        <button onClick={handleComplete}>Mark as Done</button>
        <button onClick={handleUpdate}>Edit</button>
      </div>
      {isExpanded && (
        <div className="task-details">
          <p>{task.description}</p>
          <p>Last updated: {new Date(task.timestamp).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default Task;
