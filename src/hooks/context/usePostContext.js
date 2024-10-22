import { createContext, useContext } from "react";

export const PostsContext = createContext({
  posts: [],
  comments: [],
  isPostsLoading: false,
  isCommentsLoading: false,
  getPostById: () => {},
  getCommentsByPostId: () => {},
});

// Create a custom hook for easier access to the context
const usePostContext = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error(
      "usePostContext must be used within a PostsContextProvider"
    );
  }
  return context;
};

export default usePostContext;
