import React from "react";
import Search from "./Search";
import Topics from "./Topics";

const Header = ({ question, searchQuery, setSearchQuery }) => {
  return (
    <div className="bg-slate-500 sm:justify-between sm:h-16 h-24 text-slate-100 flex sm:flex-row  items-center px-4 flex-col space-y-1 justify-center">
      <h1 className="">Simple Questions &rarr; Simplified Answers.</h1>
      <Search
        questions={question}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};

export default Header;
