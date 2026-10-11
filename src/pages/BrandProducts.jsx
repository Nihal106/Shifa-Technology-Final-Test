import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Container from "../components/ui/Container";
import ProductGrid from "../components/category/ProductGrid";

import brands from "../data/brands.json";
import products from "../data/products.json";
import categories from "../data/categories.json";

import SEO from "../components/seo/SEO";

export default function BrandProducts() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation("common");

  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  const brand = brands.find(
    (item) => item.slug === slug
  );

  const brandProducts = useMemo(
    () =>
      brand
        ? products.filter(
            (product) => product.brandId === brand.id
          )
        : [],
    [brand]
  );

  const brandCategoryIds = useMemo(
    () => new Set(brandProducts.map((product) => product.categoryId)),
    [brandProducts]
  );

  const brandCategories = categories.filter((category) =>
    brandCategoryIds.has(category.id)
  );

  if (!brand) {
    return (
      <Container className="py-20">
        <h1 className="text-3xl font-bold text-slate-900">
          {t("brand.notFound", {
            defaultValue: "Brand not found",
          })}
        </h1>

        <Link
          to="/"
          className="mt-4 inline-block font-medium text-blue-600 hover:underline"
        >
          {t("nav.home", { defaultValue: "Home" })}
        </Link>
      </Container>
    );
  }

  return (
    <>
      <SEO
        title={brand.name}
        description={`Explore ${brand.name} medical equipment and healthcare products from Shifa Technologies.`}
        keywords={`${brand.name}, medical equipment, healthcare products, Saudi Arabia`}
        url={`/brands/${brand.slug}`}
        image={brand.logo}
      />

      <section className="bg-slate-50 py-10 sm:py-14">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Link
              to="/"
              className="mb-6 inline-block text-sm font-medium text-blue-600 hover:underline"
            >
              ← {t("nav.home", { defaultValue: "Home" })} /{" "}
              {t("brand.title", { defaultValue: "Brands" })}
            </Link>

            <div className="mx-auto mb-5 flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-sm sm:h-28 sm:max-w-xs">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              {brand.name}
            </h1>

            <p className="mt-3 text-slate-600">
              {t("brand.description", {
                defaultValue:
                  "Explore products from this brand available through Shifa Technologies.",
              })}
            </p>

            <p className="mt-3 text-sm font-medium text-slate-500">
              {t("brand.productCount", {
                count: brandProducts.length,
                defaultValue: `${brandProducts.length} products`,
              })}
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-10 sm:py-12">
        {/* Relevant categories */}
        {brandCategories.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              {t("brand.availableCategories", {
                defaultValue: "Available Categories",
              })}
            </h2>

            <div className="flex flex-wrap gap-2">
              {brandCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
                >
                  {category.name[lang]}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            {t("brand.products", {
              defaultValue: `${brand.name} Products`,
              brand: brand.name,
            })}
          </h2>
        </div>

        <ProductGrid products={brandProducts} />
      </Container>
    </>
  );
}