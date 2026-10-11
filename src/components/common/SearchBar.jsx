
import { useState } from "react";
import { Search, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import { searchProducts } from "../../services/searchService";
import SearchDropdown from "./SearchDropdown";

export default function SearchBar() {
  const { t } = useTranslation("common");

  const [query, setQuery] = useState("");

  const results = searchProducts(query);

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        {/* Search Icon */}
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        {/* Search Input */}
        <input
          type="text"
          placeholder={t("search.placeholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`w-full rounded-lg border border-gray-300 py-2 pl-10 transition focus:border-blue-500 focus:outline-none ${
            query ? "pr-10" : "pr-4"
          }`}
          aria-label={t("search.placeholder")}
        />

        {/* Clear Search Button */}
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Clear search"
            title="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Search Suggestions */}
      <SearchDropdown
        results={results}
        query={query}
      />
    </div>
  );
}