import { useState } from "react";

const Avatar = ({ name, src, styledClasses }) => {
  const [imageError, setImageError] = useState(false);

  // Function to get the initials from the name
  const getInitials = (name) => {
    const nameParts = name.split(" ");
    const initials = nameParts.map((part) => part[0]).join("");
    return initials.toUpperCase();
  };

  return (
    <div
      className={`flex items-center justify-center bg-blue-500 text-white rounded-full text-lg font-bold size-10 object-cover ${styledClasses}`}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={name}
          className={`rounded-full w-full h-full object-cover`}
          onError={() => setImageError(true)}
        />
      ) : (
        <span>{getInitials(name)}</span>
      )}
    </div>
  );
};

export default Avatar;
