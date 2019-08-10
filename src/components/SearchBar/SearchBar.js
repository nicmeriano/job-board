import React from "react";

import style from "./searchbar.module.scss";

const SearchBar = ({ searchTerm, updateSearch, fetchJobs, updateJobs }) => {
  const [search, update] = React.useState("");

  return (
    <form className={style.form}>
      <input
        type="text"
        value={search}
        onChange={e => {
          update(e.target.value);
        }}
      />
      <button
        onClick={e => {
          e.preventDefault();
          fetchJobs(updateJobs, search);
          update("");
        }}
      >
        search
      </button>
    </form>
  );
};

export default SearchBar;
