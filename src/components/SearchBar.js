import React, {useState} from "react";

import style from "./SearchBar.module.scss";

function SearchBar({ updateSearchTerm }) {
  const [search, update] = useState("");

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
          updateSearchTerm(search);
        }}
      >
        search
      </button>
    </form>
  );
}

export default SearchBar;
