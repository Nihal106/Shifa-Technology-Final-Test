
import { useTranslation } from "react-i18next";

export default function BrandFilter({
  brands = [],
  selectedBrandIds = [],
  onBrandChange,
}) {
  const { t } = useTranslation("common");

  const handleChange = (brandId, checked) => {
    if (checked) {
      onBrandChange([...selectedBrandIds, brandId]);
    } else {
      onBrandChange(
        selectedBrandIds.filter((id) => id !== brandId)
      );
    }
  };

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-slate-900">
        {t("category.brands")}
      </h3>

      <div className="space-y-3">
        {brands.map((brand) => (
          <label
            key={brand.id}
            className="flex cursor-pointer items-center gap-3"
          >
            <input
              type="checkbox"
              checked={selectedBrandIds.includes(brand.id)}
              onChange={(event) =>
                handleChange(brand.id, event.target.checked)
              }
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />

            <span className="text-sm text-slate-700 transition-colors hover:text-blue-600">
              {brand.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
