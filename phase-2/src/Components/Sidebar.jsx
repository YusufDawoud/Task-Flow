function Sidebar({ setCurrentPage }) {
  return (
    <div
      className="border-end border-white p-4 bg-secondary"
      style={{ width: "260px", minHeight: "100vh" }}
    >
      <h2 className="fw-bold fs-5 mb-4 text-dark">TaskFlow</h2>

      <div className="d-grid gap-2">
        <button
          className="btn btn-dark text-start"
          onClick={() => setCurrentPage("myday")}
        >
          My Day
        </button>

        <button
          className="btn btn-dark text-start"
          onClick={() => setCurrentPage("important")}
        >
          Important
        </button>

        <button
          className="btn btn-dark text-start"
          onClick={() => setCurrentPage("completed")}
        >
          Completed
        </button>

        <button
          className="btn btn-dark text-start"
          onClick={() => setCurrentPage("all")}
        >
          All Tasks
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
