import { useState, useEffect, useRef } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const SearchAutocomplete = ({ handleSearch, handleSelectSuggestion }) => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1); // Track active suggestion index
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false); // Control suggestion visibility
  const suggestionsListRef = useRef(null);

  // Handle input change and update search
  const onSearchChange = (e) => {
    const searchValue = e.target.value;
    setQuery(searchValue);

    // Call the external handleSearch function passed as prop
    handleSearch(searchValue, setFilteredSuggestions);

    // Show suggestions when query is not empty
    setIsSuggestionsOpen(searchValue.length > 0);
    setActiveSuggestionIndex(-1); // Reset active suggestion when typing
  };

  // Handle click on suggestion
  const handleSuggestionClick = (suggestion) => {
    setQuery(
      suggestion.searchType === "post"
        ? suggestion.title
        : suggestion.firstName + " " + suggestion.lastName
    );
    setFilteredSuggestions([]);
    setIsSuggestionsOpen(false);
    handleSelectSuggestion(suggestion);
  };

  // Clear the search input
  const clearSearch = (event) => {
    event.stopPropagation();
    setQuery("");
    setFilteredSuggestions([]);
    setIsSuggestionsOpen(false);
  };

  // Handle keyboard navigation and actions
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter" && activeSuggestionIndex >= 0) {
      e.preventDefault();
      handleSuggestionClick(filteredSuggestions[activeSuggestionIndex]);
    } else if (e.key === "Escape") {
      setIsSuggestionsOpen(false); // Close suggestion box on Escape
    }
  };

  // Set focus on active suggestion when arrow keys are used
  useEffect(() => {
    if (
      suggestionsListRef.current &&
      activeSuggestionIndex >= 0 &&
      activeSuggestionIndex < filteredSuggestions.length
    ) {
      const activeElement =
        suggestionsListRef.current.children[activeSuggestionIndex];
      activeElement.scrollIntoView({ block: "nearest" });
    }
  }, [activeSuggestionIndex, filteredSuggestions.length]);

  return (
    <div className="relative w-full">
      <div className="flex flex-row items-center bg-gray-100 rounded-md ">
        <AiOutlineSearch className="w-12 text-gray-500 text-xl" />
        <input
          type="text"
          className="text-sm py-1 w-full bg-transparent text-gray-700 focus:outline-none"
          placeholder="Search for User/Post"
          value={query}
          onChange={onSearchChange}
          onKeyDown={handleKeyDown} // Add keyboard events for input field
          aria-label="Search for User or Post" // Accessible label
          role="combobox"
          aria-expanded={isSuggestionsOpen}
          aria-controls="suggestions-list"
          aria-autocomplete="list"
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
      {isSuggestionsOpen && filteredSuggestions.length > 0 && (
        <ul
          id="suggestions-list"
          role="listbox"
          ref={suggestionsListRef}
          className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-2 z-10"
          aria-live="polite"
        >
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              id={`suggestion-${index}`}
              role="option"
              aria-selected={index === activeSuggestionIndex}
              className={`px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer flex flex-row justify-between items-center border-b border-dotted ${
                index === activeSuggestionIndex ? "bg-gray-100" : ""
              }`}
              onClick={() => handleSuggestionClick(suggestion)}
              onMouseEnter={() => setActiveSuggestionIndex(index)} // Set active on hover for better accessibility
            >
              <span className="truncate w-3/4">
                {suggestion.searchType === "post"
                  ? suggestion.title
                  : suggestion.firstName + " " + suggestion.lastName}
              </span>
              <span className="w-1/4 text-right text-black uppercase">
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
