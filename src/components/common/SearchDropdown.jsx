import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SearchDropdown({
  results,
  query,
}) {
  const { t } = useTranslation("common");

  if (!query.trim()) return null;

  return (
    <div className="absolute top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
      {results.length === 0 ? (
        <div className="p-4 text-center text-gray-500">
          {t("search.noResults")}
        </div>
      ) : (
        results.map((product) => (
          <Link
            key={product.id}
            to={`/category/${product.category.slug}`}
            state={{
              highlightProduct: product.id,
            }}
            className="flex items-center gap-4 border-b border-gray-100 p-4 transition hover:bg-gray-50 last:border-b-0"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-14 w-14 rounded-lg object-cover"
            />

            <div>
              <h4 className="font-medium text-gray-900">
                {product.name}
              </h4>

              <p className="text-sm text-gray-500">
                {product.category.name}
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}