import { useTranslation } from "react-i18next";

import brands from "../../data/brands.json";
import SectionHeader from "../common/SectionHeader";
import Container from "../ui/Container";

export default function BrandsSection() {
  const { t } = useTranslation("home");

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
            <div
              key={brand.id}
              className="group flex h-36 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="mb-4 h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <h3 className="text-center text-base font-semibold text-slate-700">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}