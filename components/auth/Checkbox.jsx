const Checkbox = ({ id, label, error, register, ...props }, ref) => (
  <div>
    <div className="flex items-center">
      <input
        id={id}
        name={id}
        type="checkbox"
        className="h-4 w-4 rounded"
        {...register}
        {...props}
      />
      <label htmlFor={id} className="ml-2 text-sm text-gray-800">
        {label}
      </label>
    </div>
    {error && (
      <span className="text-red-500 text-xs mt-2 leading-normal block">
        {error}
      </span>
    )}
  </div>
);

export default Checkbox;
