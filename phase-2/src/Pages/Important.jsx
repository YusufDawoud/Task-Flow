import Topbar from "../components/Topbar";
import TaskList from "../components/TaskList";

function Important({ tasks, toggleComplete }) {
  const importantTasks = tasks.filter(
    (task) => task.starred
  );

  return (
    <>
      <Topbar title="Important Tasks" />

      <TaskList
        tasks={importantTasks}
        toggleComplete={toggleComplete}
      />
    </>
  );
}

export default Important;