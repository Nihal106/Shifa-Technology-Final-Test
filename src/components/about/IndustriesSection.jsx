import { useTranslation } from "react-i18next";
import * as Icons from "lucide-react";

import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";

import about from "../../data/about.json";

export default function IndustriesSection() {
  const { t, i18n } = useTranslation("about");

  const lang =
    i18n.language === "ar" ? "ar" : "en";

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>

        <SectionHeader
          badge={t("industries.badge")}
          title={t("industries.title")}
          highlightedText={t("industries.highlight")}
          description={t("industries.description")}
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {about.industries.map((industry) => {
            const Icon = Icons[industry.icon];

            return (
              <div
                key={industry.id}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="inline-flex rounded-xl bg-blue-100 p-4 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {Icon && <Icon size={28} />}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {industry.title[lang]}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {industry.description[lang]}
                </p>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}