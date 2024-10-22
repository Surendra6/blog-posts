import { useQuery } from "@tanstack/react-query";
import useApiClient from "./useApiClient";

export const useFetchUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await useApiClient.get("/users?limit=1000");
      return response.data["users"];
    },
  });
};
