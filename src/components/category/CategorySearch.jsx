import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CategorySearch({
  searchTerm,
  setSearchTerm,
}) {
  const { t } = useTranslation("common");
  return (
    <div>
<h3 className="mb-3 text-lg font-semibold text-slate-900">
  {t("category.searchTitle")}
</h3>

      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

<input
  type="text"
  placeholder={t("category.searchPlaceholder")}
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 focus:border-blue-500 focus:outline-none"
/>
      </div>
    </div>
  );
}