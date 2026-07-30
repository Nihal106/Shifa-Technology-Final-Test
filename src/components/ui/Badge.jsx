export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-sm font-medium">
      {children}
    </span>
  );
}