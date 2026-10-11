
import { useState } from "react";
import {
  SlidersHorizontal,
  X,
  ChevronDown,
  RotateCcw,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import CategorySearch from "./CategorySearch";
import CategoryList from "./CategoryList";
import BrandFilter from "./BrandFilter";

export default function CategorySidebar({
  categories,
  brands,
  searchTerm,
  setSearchTerm,
  selectedBrandIds,
  onBrandChange,
}) {
  const { t } = useTranslation("common");

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [categoriesExpanded, setCategoriesExpanded] =
    useState(true);
  const [brandsExpanded, setBrandsExpanded] = useState(true);

  const activeFilterCount =
    selectedBrandIds.length + (searchTerm.trim() ? 1 : 0);

  const clearAllFilters = () => {
    setSearchTerm("");
    onBrandChange([]);
  };

  const closeMobileDrawer = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile filter button */}
      <div className="mb-4 lg:hidden">
        <button
          type="button"
          onClick={() => setIsMobileOpen(true)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-filter-drawer"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 font-medium text-slate-800 shadow-sm transition hover:border-blue-500"
        >
          <SlidersHorizontal size={18} />

          {t("category.filters", {
            defaultValue: "Filters",
          })}

          {activeFilterCount > 0 && (
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden rounded-xl border border-slate-200 bg-white p-6 lg:block">
        <div className="space-y-8">
          <CategorySearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <CategoryList categories={categories} />

          <BrandFilter
            brands={brands}
            selectedBrandIds={selectedBrandIds}
            onBrandChange={onBrandChange}
          />
        </div>
      </aside>

      {/* Mobile filter drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <button
            type="button"
            aria-label={t("category.closeFilters", {
              defaultValue: "Close filters",
            })}
            onClick={closeMobileDrawer}
            className="absolute inset-0 h-full w-full bg-black/40"
          />

          {/* Drawer */}
          <section
            id="mobile-filter-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-filter-title"
            className="absolute inset-y-0 right-0 flex w-[min(88%,360px)] flex-col bg-white shadow-xl"
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 py-4">
              <h2
                id="mobile-filter-title"
                className="text-lg font-semibold text-slate-900"
              >
                {t("category.filters", {
                  defaultValue: "Filters",
                })}
              </h2>

              <button
                type="button"
                onClick={closeMobileDrawer}
                aria-label={t("category.closeFilters", {
                  defaultValue: "Close filters",
                })}
                className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable filter content */}
            <div className="min-h-0 flex-1 space-y-6 overflow-y-auto overscroll-contain p-5">
              {/* Product search */}
              <CategorySearch
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />

              {/* Categories accordion */}
              <div className="border-b border-slate-200 pb-4">
                <button
                  type="button"
                  onClick={() =>
                    setCategoriesExpanded((previous) => !previous)
                  }
                  aria-expanded={categoriesExpanded}
                  className="flex w-full items-center justify-between gap-3 py-2 text-left font-semibold text-slate-900"
                >
                  <span>
                    {t("nav.categories", {
                      defaultValue: "Categories",
                    })}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform ${
                      categoriesExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {categoriesExpanded && (
                  <div className="mt-3">
                    <CategoryList
                      categories={categories}
                      showHeading={false}
                    />
                  </div>
                )}
              </div>

              {/* Brands accordion */}
              <div className="border-b border-slate-200 pb-4">
                <button
                  type="button"
                  onClick={() =>
                    setBrandsExpanded((previous) => !previous)
                  }
                  aria-expanded={brandsExpanded}
                  className="flex w-full items-center justify-between gap-3 py-2 text-left font-semibold text-slate-900"
                >
                  <span>
                    {t("category.brands", {
                      defaultValue: "Brands",
                    })}

                    {selectedBrandIds.length > 0 && (
                      <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                        {selectedBrandIds.length}
                      </span>
                    )}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform ${
                      brandsExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {brandsExpanded && (
                  <div className="mt-3">
                    <BrandFilter
                      brands={brands}
                      selectedBrandIds={selectedBrandIds}
                      onBrandChange={onBrandChange}
                      showHeading={false}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Fixed footer */}
            <div className="flex shrink-0 gap-3 border-t border-slate-200 bg-white p-4">
              <button
                type="button"
                onClick={clearAllFilters}
                disabled={activeFilterCount === 0}
                className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <RotateCcw size={15} />

                {t("category.clearAll", {
                  defaultValue: "Clear all",
                })}
              </button>

              <button
                type="button"
                onClick={closeMobileDrawer}
                className="min-w-0 flex-1 rounded-lg bg-blue-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                {t("category.showProducts", {
                  defaultValue: "Show Products",
                })}
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}