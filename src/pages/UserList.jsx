import { useUsersContext } from "../hooks/context/UsersContext";
import UserInfo from "../components/UserInfo";

const UsersList = () => {
  const { users } = useUsersContext();

  return users.map((user) => (
    <div
      key={user.id}
      className="rounded-lg bg-white p-5 mb-2 border border-gray-300"
    >
      <UserInfo userId={user.id} />
    </div>
  ));
};

export default UsersList;
