import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useUsersContext } from "../hooks/context/UsersContext";
import Avatar from "../design-system/Avatar";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { MdOutlineInsights } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { useTodosContext } from "../hooks/context/TodosContext";
import usePostContext from "../hooks/context/usePostContext";

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useUsersContext();
  const { posts } = usePostContext();
  const { todos } = useTodosContext();
  const userId = useMemo(() => Number(id), [id]);

  const postCount = posts?.filter((post) => post.userId === userId).length;

  const todosByUser = useMemo(
    () => todos?.filter((todo) => todo.userId === userId),
    [todos, userId]
  );

  const user = useMemo(() => {
    return users.find((user) => (user.id = userId));
  }, [userId, users]);

  if (!user) return <h1>User Not found</h1>;

  return (
    <section className="rounded-lg bg-white text-black p-5 border border-gray-300 text-md">
      {/* Profile Section */}
      <h2 className="text-xl font-semibold flex flex-row gap-2 items-center">
        <CgProfile /> Profile
      </h2>
      <section className="flex flex-row gap-3 justify-between items-start border-b py-5">
        <div className="flex flex-col items-center">
          <Avatar
            firstName={user?.firstName}
            lastName={user?.lastName}
            styledClasses="size-24"
          />
          <div className="mt-2 text-center">
            {user?.firstName} {user?.lastName}
          </div>
        </div>

        <div className="text-sm md:text-base">
          <div className="flex flex-row gap-3 items-center my-2">
            <MdEmail className="size-4 md:size-6" /> <span>{user?.email}</span>
          </div>
          <div className="flex flex-row gap-3 items-center my-2">
            <MdLocalPhone className="size-4 md:size-6" />{" "}
            <span>{user?.phone}</span>
          </div>
          <div className="flex flex-row gap-3 items-start my-2">
            <MdLocationOn className="size-5 md:size-6" />{" "}
            <span>
              {user?.address.address}, {user?.address.city}
              <br />
              {user?.address.stateCode}, {user?.address.postalCode} ,{" "}
              {user?.address.country}
            </span>
          </div>
          <div className="flex flex-row items-center"></div>
        </div>
      </section>
      {/* Company Section */}
      <h2 className="text-xl font-semibold mt-5 flex flex-row gap-2 items-center">
        <GoOrganization />
        Company
      </h2>
      <section className="border-b py-6">
        <div className="font-semibold text-gray-700 text-base">
          {user?.company.name}, {user?.company.department} |{" "}
          {user?.company.title}
        </div>

        <div className=" text-gray-600 text-sm">
          {user?.company.address.address}, {user?.company.address.city},{" "}
        </div>
        <div className=" text-gray-600 text-sm">
          {user?.company.address.stateCode} {user?.company.address.postalCode},{" "}
          {user?.company.address.country}
        </div>
        <a
          className="text-xs hover:underline cursor-pointer"
          href={user?.website}
          target="_blank"
        >
          {user?.website}
        </a>
      </section>

      {/* Activity Section */}
      <h2 className="text-xl font-semibold mt-5 flex flex-row gap-2 items-center">
        <MdOutlineInsights />
        Activity
      </h2>
      <section className="border-b py-6">
        <div className="text-sm font-semibold">{postCount} Posts</div>
        {/* <div className="text-sm font-semibold">
          {albumIds.length} Albums (
          <span className="text-xs text-gray-600">
            {photosOfUser?.length} Photos
          </span>
          )
        </div> */}
        <div className="text-sm font-semibold">
          {todosByUser.length} Pending Todos
        </div>
      </section>

      {/* Location Section */}
      <h2 className="text-xl font-semibold mt-5 flex flex-row gap-2 items-center">
        <FaMapMarkedAlt />
        Location
      </h2>
      <section className="py-6">
        Integrate Google Map here for coordinates{" "}
        {user?.address.coordinates.lat}
        {", "}
        {user?.address.coordinates.lng}
      </section>
    </section>
  );
};

export default UserDetails;
