import { createContext, useContext } from "react";
import useFetchAlbums from "../services/useFetchAlbums";
import useFetchPhotos from "../services/useFetchPhotos";

const AlbumsContext = createContext({ albums: [], photos: [] });

// Create a custom hook for easier access to the context
const useAlbumsContext = () => {
  const context = useContext(AlbumsContext);
  if (!context) {
    throw new Error(
      "useAlbumsContext must be used within a AlbumsContextProvider"
    );
  }
  return context;
};

const AlbumsContextProvider = ({ children }) => {
  const { data: albums } = useFetchAlbums();
  const { data: photos } = useFetchPhotos();

  return (
    <AlbumsContext.Provider
      value={{ albums: albums || [], photos: photos || [] }}
    >
      {children}
    </AlbumsContext.Provider>
  );
};

export { useAlbumsContext, AlbumsContextProvider };
