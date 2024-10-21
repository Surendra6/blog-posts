import { useQuery } from "@tanstack/react-query";
import useApiClient from "./useApiClient";

export const useFetchUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await useApiClient.get("/users");
      return response.data["users"];
    },
  });
};
