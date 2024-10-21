import useApiClient from "./useApiClient";

// Fetch all posts
export const fetchPosts = async () => {
  const response = await useApiClient.get("/posts"); // GET request to /posts
  return response.data["posts"];
};

// Fetch a single post by ID
export const fetchPostById = async (id) => {
  const response = await useApiClient.get(`/posts/${id}`);
  return response.data;
};

// Create a new post (POST request)
export const createPost = async (newPost) => {
  const response = await useApiClient.post("/posts", newPost);
  return response.data;
};

// Update a post by ID (PUT request)
export const updatePost = async (id, updatedPost) => {
  const response = await useApiClient.put(`/posts/${id}`, updatedPost);
  return response.data;
};

// Delete a post by ID (DELETE request)
export const deletePost = async (id) => {
  const response = await useApiClient.delete(`/posts/${id}`);
  return response.data;
};
