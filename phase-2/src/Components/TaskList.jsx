import TaskCard from "./TaskCard";

function TaskList({ tasks, toggleComplete }) {
  return (
    <div className="border-dark" >
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;