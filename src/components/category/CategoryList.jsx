import { NavLink } from "react-router-dom";

export default function CategoryList({
  categories,
  selectedCategory,
}) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold text-slate-900">
        Categories
      </h3>

      <div className="space-y-2">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.slug}`}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-2 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}