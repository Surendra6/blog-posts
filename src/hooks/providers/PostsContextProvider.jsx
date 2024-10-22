import useFetchPosts from "../services/useFetchPosts";
import useFetchComments from "../services/useFetchComments";
import { PostsContext } from "../context/usePostContext";

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

export default PostsContextProvider;
