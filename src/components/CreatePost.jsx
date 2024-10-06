import { useState } from "react";
import { useCreatePost } from "../hooks/services/useCreatePost";

const CreatePost = () => {
  const { mutate, isLoading, isError, error } = useCreatePost();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ title, body }); // Call the mutation function to create a new post
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h1 className="text-3xl font-bold mb-4">Create New Post</h1>

      <div className="mb-4">
        <label className="block mb-2">Title</label>
        <input
          className="border p-2 w-full"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Body</label>
        <textarea
          className="border p-2 w-full"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
        disabled={isLoading}
      >
        {isLoading ? "Creating..." : "Create Post"}
      </button>

      {isError && <p className="text-red-500 mt-4">Error: {error.message}</p>}
    </form>
  );
};

export default CreatePost;
