import { useContext, useMemo } from "react";
import Avatar from "../design-system/Avatar";
import { Link } from "react-router-dom";

import UsersContext from "../hooks/context/UsersContext";

const UserInfo = ({ userId }) => {
  const { users } = useContext(UsersContext);

  const userDetails = useMemo(() => {
    return users.find((user) => user.id === userId);
  }, [users, userId]);

  if (!userDetails) return <h1>{`Details not found`}</h1>;

  return (
    <div className="flex flex-row gap-2 items-center">
      <Link
        to={`/blog-posts/users/${userId}`}
        className="text-black font-bold text-sm hover:underline"
      >
        <Avatar name={userDetails.name} size={16} />
      </Link>
      <div className="flex flex-col">
        <Link
          to={`/blog-posts/users/${userId}`}
          className="text-black text-sm hover:underline"
        >
          {userDetails.name}
        </Link>
        <p className="text-xs text-gray-500">
          {userDetails.company.name} | {userDetails.company.catchPhrase}
        </p>
        <a
          className="text-xs hover:underline"
          href="https://github.com/Surendra6"
          target="_blank"
        >
          Website
        </a>
      </div>
    </div>
  );
};

export default UserInfo;
