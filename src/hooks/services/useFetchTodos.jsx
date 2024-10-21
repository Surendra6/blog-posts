import { useQuery } from "@tanstack/react-query";
import useApiClient from "./useApiClient";

export const useFetchTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await useApiClient.get("/todos");
      return response.data["todos"];
    },
  });
};

export default useFetchTodos;
