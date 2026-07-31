export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100",

    success:
      "bg-green-600 text-white hover:bg-green-700",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}