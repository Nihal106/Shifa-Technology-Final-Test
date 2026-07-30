import CategorySearch from "./CategorySearch";
import CategoryList from "./CategoryList";
import BrandFilter from "./BrandFilter";

export default function CategorySidebar({
  categories,
  brands,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <aside className="space-y-8 rounded-xl border border-slate-200 bg-white p-6">
      <CategorySearch
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>

      <CategoryList
        categories={categories}
      />

      <BrandFilter
        brands={brands}
      />
    </aside>
  );
}