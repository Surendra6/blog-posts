import Avatar from "../design-system/Avatar";
import { Link } from "react-router-dom";
import useUsersContext from "../hooks/context/useUsersContext";

const UserInfo = ({ userId }) => {
  const { getUserById } = useUsersContext();

  const userDetails = getUserById(userId);

  if (!userDetails)
    return (
      <div className="max-w-sm w-full">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 size-16"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex flex-row gap-2 items-center">
      <Link
        to={`/blog-posts/users/${userId}`}
        className="text-black font-bold text-sm hover:underline"
      >
        <Avatar
          firstName={userDetails.firstName}
          lastName={userDetails.lastName}
          styledClasses="size-16 text-lg"
        />
      </Link>
      <div className="flex flex-col">
        <Link
          to={`/blog-posts/users/${userId}`}
          className="text-black text-sm hover:underline capitalize"
        >
          {userDetails.firstName} {userDetails.lastName} | {userDetails.gender}
        </Link>
        <p className="text-xs text-gray-500">
          {userDetails.company.name} | {userDetails.company.title}
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
