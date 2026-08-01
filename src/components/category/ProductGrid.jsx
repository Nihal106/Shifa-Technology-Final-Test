import ProductCard from "../ui/ProductCard";
import { useTranslation } from "react-i18next";

export default function ProductGrid({
  products,
  highlightProduct,
}) {

  const { t } = useTranslation("common");
  if (!products.length) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
        {t("category.noProducts")}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          highlight={highlightProduct === product.id}
        />
      ))}
    </div>
  );
}