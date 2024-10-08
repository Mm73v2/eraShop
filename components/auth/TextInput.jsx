const TextInput = ({ label, id, icon, register, error, ...props }, ref) => {
  return (
    <>
      <label htmlFor={id} className="block text-sm text-gray-800 mb-2">
        {label}
      </label>
      <div className="relative flex items-center">
        <input id={id} name={id} {...register} {...props} />

        {icon}
      </div>
      {error && (
        <span className="text-red-500 text-xs leading-normal block">
          {error}
        </span>
      )}
    </>
  );
};
export default TextInput;
