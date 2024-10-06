import { createContext } from "react";
import useFetchPosts from "../services/useFetchPosts";
import useFetchComments from "../services/useFetchComments";

const PostsContext = createContext([]);

export const PostsContextProvider = ({ children }) => {
  const { data: posts } = useFetchPosts();
  const { data: comments } = useFetchComments();

  const getPostById = (id) => {
    posts ? posts.filter((post) => post.id === Number(id))[0] : [];
  };

  const getCommentsByPostId = (id) => {
    const temp = comments
      ? comments.filter(({ postId }) => {
          return postId === Number(id);
        })
      : [];
    return temp;
  };

  return (
    <PostsContext.Provider
      value={{ posts, comments, getPostById, getCommentsByPostId }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
