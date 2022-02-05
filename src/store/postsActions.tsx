import ApiClient from "../services/ApiClient";

export const loadPosts = async (dispatch: any) => {
  return ApiClient.get("posts").then((response) => {
    dispatch({
      type: "posts/setPosts",
      payload: response.data,
    });
  });
};
