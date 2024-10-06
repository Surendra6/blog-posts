import { createContext } from "react";
import { useFetchUsers } from "../services/useFetchUsers";

const UsersContext = createContext([]);

export const UsersContextProvider = ({ children }) => {
  const { data } = useFetchUsers();
  return (
    <UsersContext.Provider value={{ users: data || [] }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
