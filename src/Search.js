import React from "react";
import Header from "./Header";
import Sidebarr from "./Sidebarr";
import SearchPage from "./SearchPage";

function Search() {
  return (
    <div>
      <Header />
      <div className="app__page">
        <Sidebarr />
        <SearchPage />
      </div>
      Search Page
    </div>
  );
}

export default Search;
