
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import brands from "../../data/brands.json";
import SectionHeader from "../common/SectionHeader";
import Container from "../ui/Container";

export default function BrandsSection() {
  const { t, i18n } = useTranslation("home");

  const isArabic = i18n.language.startsWith("ar");

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeader
          badge={t("brands.badge")}
          title={t("brands.title")}
          highlightedText={t("brands.highlight")}
          description={t("brands.description")}
        />

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/brands/${brand.slug}`}
              aria-label={`Explore ${brand.name} products`}
              className="group flex h-40 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                loading="lazy"
                className="mb-3 h-12 w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <h3 className="text-base font-semibold text-slate-700 transition-colors group-hover:text-blue-600">
                {brand.name}
              </h3>

              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-600 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                {t("brands.exploreProducts", {
                  defaultValue: "Explore Products",
                })}

                <ArrowRight
                  size={15}
                  className={isArabic ? "rotate-180" : ""}
                />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}