import { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const SearchAutocomplete = ({ handleSearch, handleSelectSuggestion }) => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  // Handle input change and update search
  const onSearchChange = (e) => {
    const searchValue = e.target.value;
    setQuery(searchValue);

    // Call the external handleSearch function passed as prop
    handleSearch(searchValue, setFilteredSuggestions);
  };

  // Handle click on suggestion
  const handleSuggestionClick = (suggestion) => {
    setQuery(
      suggestion.searchType === "Post" ? suggestion.title : suggestion.name
    );
    setFilteredSuggestions([]);
    handleSelectSuggestion(suggestion);
  };

  // Clear the search input
  const clearSearch = (event) => {
    event.stopPropagation();
    setQuery("");
    setFilteredSuggestions([]);
  };

  return (
    <div className="relative w-full md:w-1/2">
      <div className="flex flex-row items-center bg-gray-200 rounded-md ">
        <AiOutlineSearch className="w-12 text-gray-500 text-xl" />
        <input
          type="text"
          className="py-1 w-full bg-transparent text-gray-700 focus:outline-none"
          placeholder="Search for User or Post"
          value={query}
          onChange={onSearchChange}
        />
        <button
          className={`${
            !query ? "invisible" : ""
          } w-12 p-1 flex items-center justify-center content-center bg-transparent border-0 hover:outline-none focus:outline-none`}
          onClick={clearSearch}
          aria-label="Clear search"
        >
          <AiOutlineClose className="text-gray-500 hover:text-gray-600" />
        </button>
      </div>

      {/* Suggestions Dropdown */}
      {filteredSuggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-2 z-10">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer flex flex-row justify-between items-center border-b border-dotted"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <span className="truncate w-3/4">
                {suggestion.searchType === "Post"
                  ? suggestion.title
                  : suggestion.name}
              </span>
              <span className="w-1/4 text-right text-blue-400">
                | {suggestion.searchType ?? ""}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchAutocomplete;
