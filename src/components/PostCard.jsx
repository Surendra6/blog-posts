import { useCallback, useState } from "react";
import UserInfo from "./UserInfo";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Avatar from "../design-system/Avatar";
import usePostContext from "../hooks/context/usePostContext";
import useUsersContext from "../hooks/context/useUsersContext";
import { SlLike } from "react-icons/sl";

const PostCard = ({ postId, userId, title, body }) => {
  const { getCommentsByPostId } = usePostContext();
  const { users } = useUsersContext();

  const [showComments, setShowComments] = useState(false);

  const comments = getCommentsByPostId(postId);

  const getUser = useCallback(
    (id) => {
      return users.find((user) => (user.id = id));
    },
    [users]
  );

  return (
    <section className="rounded-lg bg-white p-5 border border-gray-300">
      <UserInfo userId={userId} />
      <h2 className="text-lg font-semibold mt-8">{title}</h2>
      <p className="mt-4 text-base ">{body}</p>
      <div className="mt-5 pt-5 border-t text-right">
        <button
          className="inline-flex items-center bg-transparent p-0 text-xs text-gray-600 hover:text-blue-400 hover:underline border-0 hover:outline-none focus:outline-none"
          onClick={() => setShowComments((prevState) => !prevState)}
        >
          {comments.length} Comments{" "}
          {showComments ? (
            <FaCaretUp className="size-5 inline" />
          ) : (
            <FaCaretDown className="size-5 inline" />
          )}
        </button>

        {showComments &&
          comments.map(({ id, body, user, likes }) => (
            <div className="flex gap-2 my-3" key={id}>
              <Avatar
                firstName={user.fullName.split(" ")[0]}
                lastName={user.fullName.split(" ")[1]}
                styledClasses={"size-10 text-sm"}
              />
              <div className="flex flex-col text-left">
                <p className="text-xs text-gray-700 font-bold mt-1">
                  {user.fullName}
                </p>
                <p className="text-xs text-gray-500">
                  {getUser(id).company.name} | {getUser(id).company.title}
                </p>
                <p className="text-xs text-black mt-3">{body}</p>
                <p className="flex flex-row flex-wrap items-center gap-1 mt-2">
                  <span className="rounded-full size-6 flex items-center justify-center bg-blue-300">
                    <SlLike className="scale-x-[-1] inline text-black size-4" />
                  </span>
                  <span>{likes}</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default PostCard;
