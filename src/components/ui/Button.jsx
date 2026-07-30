export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-white border border-gray-300 hover:bg-gray-100 text-gray-800",

    success:
      "bg-green-600 hover:bg-green-700 text-white",
  };

  return (
    <button
      className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}