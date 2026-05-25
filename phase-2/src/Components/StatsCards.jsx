function StatsCards({ tasks }) {
  const total = tasks.length;

  const completed = tasks.filter((task) => task.completed).length;

  const highPriority = tasks.filter((task) => task.priority === "High").length;

  return (
    <div className="row mb-4">
      <div className="col-md-4">
        <div className="card border-dark p-3">
          <h5>Total Tasks</h5>
          <h2>{total}</h2>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card border-dark p-3">
          <h5>Completed</h5>
          <h2>{completed}</h2>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card border-dark p-3">
          <h5>High Priority</h5>
          <h2>{highPriority}</h2>
        </div>
      </div>
    </div>
  );
}

export default StatsCards;
