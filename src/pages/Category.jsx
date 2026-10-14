
import { useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

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
  const [prevSlug, setPrevSlug] = useState(slug);
  if (prevSlug !== slug) {
    setPrevSlug(slug);
    setSelectedBrandIds([]);
    setSearchTerm("");
  }

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

  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${category.name[lang]} - Shifa Technologies`,
    "description": category.description[lang],
    "url": `https://www.shifatechnologies.com/category/${category.slug}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": filteredProducts.length,
      "itemListElement": filteredProducts.slice(0, 15).map((product, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "Product",
          "name": product.name[lang],
          "description": product.shortDescription[lang],
          "image": product.images?.[0]
            ? `https://www.shifatechnologies.com${product.images[0]}`
            : undefined,
          "category": category.name[lang],
          "offers": {
            "@type": "Offer",
            "priceCurrency": "SAR",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Shifa Technologies Medicals Co.",
            },
          },
        },
      })),
    },
  };

  const breadcrumbs = [
    { name: t("nav.home"), item: "/" },
    { name: t("nav.categories"), item: "/" },
    { name: category.name[lang], item: `/category/${category.slug}` },
  ];

  return (
    <>
      <SEO
        title={category.name[lang]}
        description={category.description[lang]}
        keywords={`${category.name[lang]}, medical equipment, hospital supplies, Saudi Arabia, Jeddah`}
        url={`/category/${category.slug}`}
        breadcrumbs={breadcrumbs}
        schema={categorySchema}
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
