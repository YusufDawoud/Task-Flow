import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import StatsCards from "../components/StatsCards";
import TaskForm from "../components/TaskForm";

import MyDay from "./MyDay";
import Important from "./Important";
import Completed from "./Completed";
import AllTasks from "./AllTasks";

import initialTasks from "../data";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState("all");

  useEffect(() => {
    setTasks(initialTasks);
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    const updated = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
          }
        : task,
    );

    setTasks(updated);
  };

  return (
    <div className="d-flex">
      <Sidebar setCurrentPage={setCurrentPage} />

      <div className="container-fluid p-4 min-vh-100">
        <StatsCards tasks={tasks} />

        <TaskForm addTask={addTask} />

        {currentPage === "myday" && (
          <MyDay tasks={tasks} toggleComplete={toggleComplete} />
        )}

        {currentPage === "important" && (
          <Important tasks={tasks} toggleComplete={toggleComplete} />
        )}

        {currentPage === "completed" && (
          <Completed tasks={tasks} toggleComplete={toggleComplete} />
        )}

        {currentPage === "all" && (
          <AllTasks tasks={tasks} toggleComplete={toggleComplete} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
