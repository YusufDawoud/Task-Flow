function TaskCard({ task, toggleComplete }) {
  return (
    <div className="card border-dark mb-2">
      <div className="card-body d-flex justify-content-between align-items-center p-2">
        <div>
          <h5
            className={`mb-0 ${task.completed ? "text-muted text-decoration-line-through" : ""}`}
          >
            {task.title}
          </h5>
          <p className="mb-0 text-muted small">
            Priority:
            <span
              className={`ms-2 badge ${task.priority === "High" ? "bg-danger" : task.priority === "Medium" ? "bg-warning text-dark" : "bg-success"}`}
            >
              {task.priority}
            </span>
          </p>
        </div>

        <div>
          <input
            type="checkbox"
            className="form-check-input"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
