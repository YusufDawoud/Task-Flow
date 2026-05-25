import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    const task = {
      id: Date.now(),
      title,
      priority,
      completed: false,
      starred: false,
      dueDate: new Date().toISOString(),
    };

    addTask(task);

    setTitle("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 ">
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Task title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div className="col-md-3">
          <button className="btn btn-primary w-100">
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskForm;