import Topbar from "../components/Topbar";
import TaskList from "../components/TaskList";

function MyDay({ tasks, toggleComplete }) {
  const todayTasks = tasks.filter(
    (task) => task.addedToday
  );

  return (
    <>
      <Topbar title="My Day" />

      <TaskList
        tasks={todayTasks}
        toggleComplete={toggleComplete}
      />
    </>
  );
}

export default MyDay;