import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CategoryList({
  categories,
  showHeading = true,
}) {
  const { t, i18n } = useTranslation("common");

  const lang =
    i18n.language === "ar" ? "ar" : "en";

  return (
    <div>
      {showHeading && (
  <h3 className="mb-3 text-lg font-semibold text-slate-900">
    {t("nav.categories")}
  </h3>
)}

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
            {category.name[lang]}
          </NavLink>
        ))}
      </div>
    </div>
  );
}