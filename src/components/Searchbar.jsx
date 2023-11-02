import React, { useState } from "react";

// Define the SearchBar component, which accepts an "onSearch" prop

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

    // Function to handle the search

    
  const handleSearch = () => {

    // Call the "onSearch" function with the search query as an argument

    onSearch(searchQuery);
  };

  return (
    <div className="flex bg-[#232224] rounded-xl py-1 px-2.5 mx-2 lg:mx-6 my-2 md:my-0">
      <input
        className="bg-[#232224] outline-none "
        type="text"
        id="search"
        placeholder="Search News..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update the searchQuery state when the input changes
      />
      <button onClick={handleSearch} className="inline-block p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </div>
  );
}

// Export the SearchBar component for use in other parts of the application

export default SearchBar;
