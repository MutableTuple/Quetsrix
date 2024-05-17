import React, { useState } from "react";
import { questions } from "./Home";

const Search = ({ searchQuery, setSearchQuery }) => {
  // searchedQuestions.forEach((entry) => {
  //   console.log(entry.Question);
  // });

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="search stupid question"
      className="p-2 outline-none text-slate-950 w-3/4 sm:w-1/4 border-md"
    />
  );
};

export default Search;
