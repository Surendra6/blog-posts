import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "./blogPostService";

// Custom hook to fetch posts using useQuery
export const useFetchPosts = () => {
  return useQuery({
    queryKey: ["posts"], // Cache based on 'posts' key
    queryFn: fetchPosts, // Use fetchPosts from postService
  });
};

export default useFetchPosts;
