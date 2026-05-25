function FilterBar({ setFilter }) {
  return (
    <div className="mb-4">
      <button
        className="btn btn-outline-light me-2"
        onClick={() => setFilter("All")}
      >
        All
      </button>

      <button
        className="btn btn-outline-danger me-2"
        onClick={() => setFilter("High")}
      >
        High
      </button>

      <button
        className="btn btn-outline-warning me-2"
        onClick={() => setFilter("Medium")}
      >
        Medium
      </button>

      <button
        className="btn btn-outline-success"
        onClick={() => setFilter("Low")}
      >
        Low
      </button>
    </div>
  );
}

export default FilterBar;