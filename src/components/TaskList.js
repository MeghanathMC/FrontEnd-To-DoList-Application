import React, { useState } from "react";
import Task from "./Task";

const TaskList = ({ tasks, onUpdate, onComplete }) => {
  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
