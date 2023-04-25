import React from "react";
import searchIcon from "../../icons/search.png";
import "./SearchBar.css";

const Search = ({ handleSearchTask }) => {
  return (
    <div className="search">
      <img
        src={searchIcon}
        alt="search_icon"
        className="search-icons"
        style={{ width: 15, height: 15 }}
      />
      <input
        onChange={(event) => handleSearchTask(event.target.value)}
        type="text"
        placeholder="search..."
      />
    </div>
  );
};

export default Search;
