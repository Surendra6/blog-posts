const TextBox = ({
  label,
  placeholder,
  value,
  onChange,
  styleClasses,
  required,
}) => {
  return (
    <>
      {label && (
        <label className="block text-black text-left text-sm">{label}</label>
      )}
      <input
        type="text"
        className={`w-full px-3 py-2 border rounded-md text-black border-black ${styleClasses}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </>
  );
};

export default TextBox;
