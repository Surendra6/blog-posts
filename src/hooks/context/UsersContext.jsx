import { createContext, useContext } from "react";
import { useFetchUsers } from "../services/useFetchUsers";

const UsersContext = createContext({ users: [], getUserById: () => {} });

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
  const { data: users } = useFetchUsers();

  const getUserById = (userId) => {
    console.log(
      users,
      userId,
      users?.find((user) => user.id === userId)
    );
    return users?.find((user) => user.id === userId);
  };

  return (
    <UsersContext.Provider
      value={{ users: users || [], getUserById: getUserById }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { useUsersContext, UsersContextProvider };
