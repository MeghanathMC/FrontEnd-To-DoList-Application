import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import tasksData from "./data/data.json";
import "./App.css";
import "./components/Task.css"; // Import Task CSS

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: tasks.length + 1,
      completed: false,
      timestamp: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, ...updatedTask, timestamp: new Date().toISOString() }
          : task
      )
    );
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onUpdate={updateTask} onComplete={completeTask} />
    </div>
  );
};

export default App;
