import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import UsersContext from "../hooks/context/UsersContext";
import Avatar from "../design-system/Avatar";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { MdOutlineInsights } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useContext(UsersContext);
  const user = useMemo(() => {
    return users.find((user) => (user.id = id));
  }, [id, users]);

  if (!user) return <h1>User Not found</h1>;

  return (
    <section className="rounded-lg bg-white text-black p-5 border border-gray-300">
      <h2 className="text-xl font-semibold flex flex-row gap-2 items-center">
        <CgProfile /> Profile
      </h2>
      <section className="flex flex-row justify-between items-start border-b py-5">
        <div>
          <Avatar name={user?.name} styledClasses="size-24" />
          <div className="mt-2">{user?.name}</div>
        </div>

        <div>
          <div className="flex flex-row gap-3 items-center my-2">
            <MdEmail size={20} /> <span>{user?.email}</span>
          </div>
          <div className="flex flex-row gap-3 items-center my-2">
            <MdLocalPhone size={20} /> <span>{user?.phone}</span>
          </div>
          <div className="flex flex-row gap-3 items-start my-2">
            <MdLocationOn size={20} />{" "}
            <span>
              {user?.address.suite}, {user?.address.street}
              <br />
              {user?.address.city}, {user?.address.zipcode}
            </span>
          </div>
          <div className="flex flex-row items-center"></div>
        </div>
      </section>

      <h2 className="text-xl font-semibold mt-5 flex flex-row gap-2 items-center">
        <GoOrganization />
        Company
      </h2>
      <section className="border-b py-6">
        <div className="font-semibold">{user?.company.name}</div>
        <div className="">
          {user?.company.catchPhrase} | {user?.company.bs}
        </div>
        <div className="">{user?.website}</div>
      </section>

      <h2 className="text-xl font-semibold mt-5 flex flex-row gap-2 items-center">
        <MdOutlineInsights />
        Activity
      </h2>
      <section className="border-b py-6"></section>

      <h2 className="text-xl font-semibold mt-5 flex flex-row gap-2 items-center">
        <FaMapMarkedAlt />
        Location
      </h2>
      <section className="py-6">
        Integrate Google Map here for coordinates {user?.address.geo.lat}
        {", "}
        {user?.address.geo.lng}
      </section>
    </section>
  );
};

export default UserDetails;
