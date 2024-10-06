import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import useFetchPostById from "../hooks/services/useFetchPostById";

const Post = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetchPostById(id);

  if (isLoading) return <h1>Loading ....</h1>;

  if (!data) return <h1>Post Not found</h1>;

  return (
    <PostCard
      postId={id}
      userId={data.userId}
      title={data.title}
      body={data.body}
    />
  );
};

export default Post;
