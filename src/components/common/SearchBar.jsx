import { useState } from "react";
import { Search } from "lucide-react";

import { searchProducts } from "../../services/searchService";
import SearchDropdown from "./SearchDropdown";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const results = searchProducts(query);

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <SearchDropdown
        results={results}
        query={query}
      />
    </div>
  );
}