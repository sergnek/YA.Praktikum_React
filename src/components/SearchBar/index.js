import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import cn from "classnames";

import "./styles.css";

const SearchBar = ({ query, setQuery, onSearch, ...props }) => {
  return (
    <div className={cn("search-bar")} {...props}>
      <Input
        className="search-bar__input"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <Button
        onClick={() => {
          onSearch();
        }}
      >
        Поиск
      </Button>
    </div>
  );
};

export default SearchBar;
