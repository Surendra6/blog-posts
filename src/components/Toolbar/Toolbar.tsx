import React from "react";
import "./Toolbar.css";

function Toolbar(props: any) {
  function handleChange(event: any) {
    props.handleSearchCallback(event.target.value);
  }

  return (
    <div className="toolbar">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        onChange={handleChange}
      />
      <span className="posts-count">
        <label>#Posts :</label> {props.postsCount}
      </span>
      <a
        href="https://github.com/Surendra6/blog-posts"
        target="_blank"
        className="git-hub-link"
      >
        <i className="fab fa-github"></i> Git Hub
      </a>
    </div>
  );
}

export default Toolbar;
