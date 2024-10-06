import { useQuery } from "@tanstack/react-query";
import { fetchPostById } from "./blogPostService";

// Custom hook to fetch a post by id using useQuery
export const useFetchPostById = (id) => {
  return useQuery({
    queryKey: ["posts", id], // Cache based on 'posts' key
    queryFn: () => fetchPostById(id),
    enabled: !!id,
  });
};

export default useFetchPostById;
