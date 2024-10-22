import { UsersContext } from "../context/useUsersContext";
import { useFetchUsers } from "../services/useFetchUsers";

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

export default UsersContextProvider;
