export default function BrandFilter({ brands }) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold text-slate-900">
        Brands
      </h3>

      <div className="space-y-3">
        {brands.map((brand) => (
          <label
            key={brand.id}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300"
            />

            <span className="text-slate-700">
              {brand.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}