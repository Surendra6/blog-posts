import { createContext, useContext } from "react";

export const UsersContext = createContext({ users: [], getUserById: () => {} });

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

export default useUsersContext;
