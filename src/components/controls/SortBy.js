const SortBy = ({ sortBy, setSortBy }) => {
  return (
    <div className="flex ml-2">
      <label
        className="flex items-end mb-1 mr-2 text-sm font-bold "
        htmlFor="search"
      >
        Sort by:
      </label>
      <select
        name="sortBy"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-24 h-6 border rounded"
      >
        <option value="id"></option>
        <option value="name">Name</option>
        <option value="age">Age</option>
      </select>
    </div>
  );
};

export default SortBy;
