import { useMemo, useState } from "react";

const Avatar = ({ firstName, lastName, src, styledClasses }) => {
  const [imageError, setImageError] = useState(false);

  const initials = useMemo(() => {
    return firstName[0] + lastName[0];
  }, [firstName, lastName]);

  return (
    <div
      className={`flex items-center justify-center text-white bg-cyan-600 rounded-full font-bold size-10 object-cover ${styledClasses}`}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={initials}
          className={`rounded-full w-full h-full object-cover`}
          onError={() => setImageError(true)}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
