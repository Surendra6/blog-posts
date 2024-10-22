import { useState } from "react";
import UserInfo from "./UserInfo";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Avatar from "../design-system/Avatar";
import usePostContext from "../hooks/context/usePostContext";

const PostCard = ({ postId, userId, title, body }) => {
  const { getCommentsByPostId } = usePostContext();
  const [showComments, setShowComments] = useState(false);

  const comments = getCommentsByPostId(postId);
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
          comments.map((comment) => (
            <div
              className="animate-fade-down animate-duration-[2000ms] animate-delay-100 text-left"
              key={comment.id}
            >
              <div className="flex flex-row gap-2 items-center">
                <span className="">
                  <Avatar name={comment.email} size={10} />
                </span>
                <p className="text-xs text-gray-500 font-bold">
                  {comment.email}
                </p>
              </div>
              <p className="px-1 pt-2 pb-4 text-xs text-gray-500 text-wrap">
                {comment.body}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default PostCard;
