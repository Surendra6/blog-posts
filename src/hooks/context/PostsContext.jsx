import { createContext, useContext } from "react";
import useFetchPosts from "../services/useFetchPosts";
import useFetchComments from "../services/useFetchComments";

const PostsContext = createContext({
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

const PostsContextProvider = ({ children }) => {
  const { data: posts, isFetching: isPostsLoading } = useFetchPosts();
  const { data: comments, isFetching: isCommentsLoading } = useFetchComments();

  const getPostById = (id) => {
    return posts
      ? posts.filter((post) => post.id === Number(id))[0]
      : undefined;
  };

  const getCommentsByPostId = (id) => {
    return comments
      ? comments.filter(({ postId }) => postId === Number(id))
      : [];
  };

  console.log({ posts });

  return (
    <PostsContext.Provider
      value={{
        posts,
        isPostsLoading,
        comments,
        isCommentsLoading,
        getPostById,
        getCommentsByPostId,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export { usePostContext, PostsContextProvider };
