import { createContext, useContext } from "react";
import { useFetchUsers } from "../services/useFetchUsers";

const UsersContext = createContext({ users: [] });

// Create a custom hook for easier access to the context
const useUsersContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error(
      "useUsersContext must be used within a UsersContextProvider"
    );
  }
  return context;
};

const UsersContextProvider = ({ children }) => {
  const { data } = useFetchUsers();

  return (
    <UsersContext.Provider value={{ users: data || [] }}>
      {children}
    </UsersContext.Provider>
  );
};

export { useUsersContext, UsersContextProvider };
