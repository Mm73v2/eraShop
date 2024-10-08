const Button = ({ text, disabled, ...props }) => (
  <button
    className={`w-full ${
      disabled ? "opacity-75 cursor-not-allowed" : ""
    } py-3 px-4 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700`}
    {...props}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;
