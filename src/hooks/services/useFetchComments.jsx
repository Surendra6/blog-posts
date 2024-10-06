import { useQuery } from "@tanstack/react-query";
import useApiClient from "./useApiClient";

export const useFetchComments = (id) => {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      const response = await useApiClient.get("/comments");
      return response.data;
    },
  });
};

export default useFetchComments;
