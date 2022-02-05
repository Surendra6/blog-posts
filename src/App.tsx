import React, { useState, useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import "./App.css";

import { loadPosts } from "./store/postsActions";

import Card from "./components/Card/Card";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootStateOrAny) => state.posts);
  const [searchValue, setSearchValue] = useState("");
  let blogList: any = [];

  useEffect(() => {
    // API call for blog posts
    loadPosts(dispatch);
  }, [dispatch]);

  blogList = filteredPosts(searchValue).map(
    (item: { id: String; title: String; body: String }) => {
      return (
        <Card
          key={item.id}
          title={item.title}
          body={item.body}
          image="https://picsum.photos/200"
        ></Card>
      );
    }
  );

  /**
   * Callback function for Search input which updates the state variable on change
   * @param value
   */
  function handleSearchCallback(value: string) {
    setSearchValue(value);
  }

  /**
   * Function to filter the posts using search string
   * @param value
   * @returns posts
   */
  function filteredPosts(value: String) {
    return posts.filter(
      (item: { id: String; title: String; body: String }) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.body.toLowerCase().includes(value.toLowerCase())
    );
  }

  return (
    <div className="App">
      <Toolbar
        postsCount={blogList.length}
        handleSearchCallback={handleSearchCallback}
      ></Toolbar>
      <div className="cards">
        {blogList.length > 0 ? blogList : "No results found"}
      </div>
    </div>
  );
}

export default App;
