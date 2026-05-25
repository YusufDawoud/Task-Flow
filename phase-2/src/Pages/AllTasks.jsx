import Topbar from "../components/Topbar";
import TaskList from "../components/TaskList";

function AllTasks({ tasks, toggleComplete }) {
  return (
    <>
      <Topbar title="All Tasks" />

      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
      />
    </>
  );
}

export default AllTasks;