import { useMemo, useState } from "react";
import { usePostContext } from "../hooks/context/PostsContext";
import PostCard from "../components/PostCard";
import { FaAnglesDown } from "react-icons/fa6";
import Loader from "../design-system/Loader";

const Home = () => {
  const { posts, isPostsLoading } = usePostContext();
  const [maxPosts, setMaxPosts] = useState(5);
  const [isLoadMore, setIsLoadMore] = useState(false);

  const handleLoadMore = () => {
    setIsLoadMore(true);
    setTimeout(() => {
      setIsLoadMore(false);
      setMaxPosts((prevState) => prevState + 5);
    }, 1000);
  };

  const loadedPosts = useMemo(
    () => (posts && posts.length ? posts.slice(0, maxPosts) : []),
    [maxPosts, posts]
  );

  if (isPostsLoading) return <Loader />;

  if (!loadedPosts.length) return <h1>No Posts found</h1>;

  return (
    <div className="w-full flex flex-col gap-5 items-center">
      {loadedPosts.map(({ id, userId, title, body }) => (
        <PostCard
          key={id}
          postId={id}
          userId={userId}
          title={title}
          body={body}
        />
      ))}
      <button
        onClick={handleLoadMore}
        className="w-32 flex items-center justify-center rounded-full text-blue-500 border-blue-500 hover:border-blue-500 focus:border-blue-500 active:border-blue-500 hover:outline-none focus:outline-none"
      >
        {isLoadMore ? (
          <div className="w-5 h-5 border-4 border-dotted rounded-full animate-spin border-blue-500"></div>
        ) : (
          "Load more"
        )}
      </button>

      <button
        className="animate-bounce bg-transparent p-0 text-gray-500 hover:text-gray-600 cursor-pointer border-0 hover:outline-none focus:outline-none"
        onClick={handleLoadMore}
      >
        <FaAnglesDown size={20} className="text-blue-500" />
      </button>
    </div>
  );
};

export default Home;
