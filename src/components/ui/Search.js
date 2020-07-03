import React from "react";

const Search = ({ handleSearch, searchTerm }) => {
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={searchTerm}
          onChange={(event) => handleSearch(event)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
