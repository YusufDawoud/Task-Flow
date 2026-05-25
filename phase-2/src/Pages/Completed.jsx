import Topbar from "../components/Topbar";
import TaskList from "../components/TaskList";

function Completed({ tasks, toggleComplete }) {
  const completedTasks = tasks.filter(
    (task) => task.completed
  );

  return (
    <>
      <Topbar title="Completed Tasks" />

      <TaskList
        tasks={completedTasks}
        toggleComplete={toggleComplete}
      />
    </>
  );
}

export default Completed;