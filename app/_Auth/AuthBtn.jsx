const Button = ({ text, ...props }) => (
  <button
    className="w-full py-3 px-4 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700"
    {...props}
  >
    {text}
  </button>
);

export default Button;
