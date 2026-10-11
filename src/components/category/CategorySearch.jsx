import { Search, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CategorySearch({
  searchTerm,
  setSearchTerm,
}) {
  const { t } = useTranslation("common");

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold text-slate-900">
        {t("category.searchTitle")}
      </h3>

      <div className="relative">
        {/* Search Icon */}
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        {/* Search Input */}
        <input
          type="text"
          placeholder={t("category.searchPlaceholder")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full rounded-lg border border-slate-300 py-2.5 pl-10 transition focus:border-blue-500 focus:outline-none ${
            searchTerm ? "pr-10" : "pr-4"
          }`}
        />

        {/* Clear Search Button */}
        {searchTerm && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear category search"
            title="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}