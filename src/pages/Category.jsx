
import { useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import Container from "../components/ui/Container";
import CategoryHeader from "../components/category/CategoryHeader";
import CategorySidebar from "../components/category/CategorySidebar";
import ProductGrid from "../components/category/ProductGrid";

import brands from "../data/brands.json";
import products from "../data/products.json";
import categories from "../data/categories.json";
import SEO from "../components/seo/SEO";

export default function Category() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrandIds, setSelectedBrandIds] = useState([]);

  const { t, i18n } = useTranslation("common");

  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  const { slug } = useParams();
  const location = useLocation();

  const highlightProduct = location.state?.highlightProduct;

  // Clear the selected brands when navigating to another category.
  useEffect(() => {
    setSelectedBrandIds([]);
    setSearchTerm("");
  }, [slug]);

  const category = categories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    return (
      <Container className="py-20">
        <h1 className="text-3xl font-bold">
          {t("category.categoryNotFound")}
        </h1>
      </Container>
    );
  }

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      product.categoryId === category.id;

    const matchesSearch =
      product.name[lang].toLowerCase().includes(normalizedSearch) ||
      product.shortDescription[lang]
        .toLowerCase()
        .includes(normalizedSearch);

    const matchesBrand =
      selectedBrandIds.length === 0 ||
      selectedBrandIds.includes(product.brandId);

    return matchesCategory && matchesSearch && matchesBrand;
  });

  return (
    <>
      <SEO
        title={category.name[lang]}
        description={category.description[lang]}
        keywords={`${category.name[lang]}, medical equipment, Saudi Arabia`}
        url={`/category/${category.slug}`}
      />

      <CategoryHeader
        category={category}
        productCount={filteredProducts.length}
      />

      <Container className="py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <CategorySidebar
            categories={categories}
            brands={brands}
            selectedCategory={category}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedBrandIds={selectedBrandIds}
            onBrandChange={setSelectedBrandIds}
          />

          <div className="min-w-0 lg:col-span-3">
            <ProductGrid
              products={filteredProducts}
              highlightProduct={highlightProduct}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
