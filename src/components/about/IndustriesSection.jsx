import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";

import about from "../../data/about.json";
import { getIcon } from "../../utils/iconMapper";

export default function IndustriesSection() {
  const { t } = useTranslation("about");

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>

        <SectionHeader
          badge={t("industries.badge")}
          title={t("industries.title")}
          highlightedText={t("industries.highlight")}
          description={t("industries.description")}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {about.industries.map((industry) => {
            const Icon = getIcon(industry.icon);

            return (
              <div
                key={industry.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-blue-100 p-4 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {industry.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {industry.description}
                </p>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}