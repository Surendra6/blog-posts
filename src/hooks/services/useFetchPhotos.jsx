import { useQuery } from "@tanstack/react-query";
import useApiClient from "./useApiClient";

export const useFetchPhotos = () => {
  return useQuery({
    queryKey: ["photos"],
    queryFn: async () => {
      const response = await useApiClient.get("/photos");
      return response.data;
    },
  });
};

export default useFetchPhotos;
