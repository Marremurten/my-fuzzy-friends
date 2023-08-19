import React from 'react';

const Search = ({ setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex w-[300px]">
      <label
        className="flex items-end w-24 mb-1 text-sm font-bold "
        htmlFor="search"
      >
        Search Pets:
      </label>
      <input
        type="text"
        id="search"
        className="w-full h-6 border rounded "
        placeholder="Enter pet name..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
