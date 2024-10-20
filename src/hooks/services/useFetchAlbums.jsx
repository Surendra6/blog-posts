import { useQuery } from "@tanstack/react-query";
import useApiClient from "./useApiClient";

export const useFetchAlbums = () => {
  return useQuery({
    queryKey: ["albums"],
    queryFn: async () => {
      const response = await useApiClient.get("/albums");
      return response.data;
    },
  });
};

export default useFetchAlbums;
