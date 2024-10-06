import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "./blogPostService";

// Custom hook for creating a new post
export const useCreatePost = () => {
  const queryClient = useQueryClient(); // To refetch queries after mutation

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      // Invalidate and refetch posts after a new post is created
      queryClient.invalidateQueries(["posts"]);
    },
  });
};
