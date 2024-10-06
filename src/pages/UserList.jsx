import { useContext } from "react";
import UsersContext from "../hooks/context/UsersContext";
import UserInfo from "../components/UserInfo";

const UsersList = () => {
  const { users } = useContext(UsersContext);

  return users.map((user) => (
    <div
      key={user.id}
      className="rounded-lg bg-white p-4 mb-2 border border-gray-300"
    >
      <UserInfo userId={user.id} />
    </div>
  ));
};

export default UsersList;
