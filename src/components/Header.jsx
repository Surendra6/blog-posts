import { Link, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { LuListTodo } from "react-icons/lu";
import { PiUsersFill } from "react-icons/pi";
import { MdPhotoLibrary } from "react-icons/md";
import SearchAutocomplete from "./SearchAutocomplete.jsx";
import { useContext, useState } from "react";
import UsersContext from "../hooks/context/UsersContext";
import { usePostContext } from "../hooks/context/PostsContext";
import { useNavigate } from "react-router-dom";

const NavLink = ({ label, icon, route, currentPath }) => {
  return (
    <Link
      to={route}
      className={`text-gray-500 flex flex-col items-center gap-0.5 py-2 md:py-1 px-3 border-b-2 hover:text-gray-600 ${
        route === currentPath ? "border-blue-500 " : "border-transparent"
      }`}
    >
      {icon}
      <span className="text-xs hidden md:inline">{label}</span>
    </Link>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { users } = useContext(UsersContext);
  const { posts } = usePostContext();
  const [showSearchInput, setShowSearchInput] = useState(false);

  // Handle search logic passed as prop
  const handleSearch = (searchValue, setFilteredSuggestions) => {
    if (searchValue.length > 2) {
      const filteredUsers = users
        .filter((user) =>
          user.name.toLowerCase().startsWith(searchValue.toLowerCase())
        )
        .map((user) => ({ ...user, searchType: "users" }));
      const filteredPosts = posts
        .filter(
          (post) =>
            post.title.toLowerCase().startsWith(searchValue.toLowerCase()) ||
            post.body.toLowerCase().startsWith(searchValue.toLowerCase())
        )
        .map((user) => ({ ...user, searchType: "post" }));

      setFilteredSuggestions([...filteredPosts, ...filteredUsers]);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSelectSuggestion = ({ searchType, id }) => {
    navigate(`/blog-posts/${searchType}/${id}`);
  };

  const handleOnSearchToggle = () => {
    setShowSearchInput((prevState) => !prevState);
  };

  return (
    <header className="bg-white text-gray-400 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-3xl container mx-auto flex justify-between px-5 items-center md:flex-row">
        <div className="relative w-full md:w-1/2">
          <SearchAutocomplete
            handleSearch={handleSearch}
            handleSelectSuggestion={handleSelectSuggestion}
          />
        </div>

        {/* <div className="w-full inline-flex md:hidden">
          {!showSearchInput && (
            <button
              className="bg-transparent p-0 text-gray-500 hover:text-gray-600 cursor-pointer border-0 hover:outline-none focus:outline-none"
              onClick={handleOnSearchToggle}
            >
              <FaSearch className="size-6 md:size-5" />
            </button>
          )}

          {showSearchInput && (
            <SearchAutocomplete
              handleSearch={handleSearch}
              handleSelectSuggestion={handleSelectSuggestion}
            />
          )}
        </div> */}

        <nav className="flex items-center gap-2">
          <NavLink
            label="Home"
            icon={<AiFillHome className="size-6 md:size-5" />}
            route="/blog-posts"
            currentPath={pathname}
          />
          <NavLink
            label="Users"
            icon={<PiUsersFill className="size-6 md:size-5" />}
            route="/blog-posts/users"
            currentPath={pathname}
          />
          <NavLink
            label="Todos"
            icon={<LuListTodo className="size-6 md:size-5" />}
            route="/blog-posts/todos"
            currentPath={pathname}
          />
          <NavLink
            label="Albums"
            icon={<MdPhotoLibrary className="size-6 md:size-5" />}
            route="/blog-posts/albums"
            currentPath={pathname}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
