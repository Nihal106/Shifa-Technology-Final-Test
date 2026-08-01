import { useTranslation } from "react-i18next";

import SectionHeader from "../common/SectionHeader";
import Container from "../ui/Container";

import features from "../../data/features.json";

import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  Stethoscope,
} from "lucide-react";

const icons = {
  ShieldCheck,
  Truck,
  BadgeCheck,
  Stethoscope,
};

export default function WhyChooseUs() {
  const { t, i18n } = useTranslation("home");

const lang =
  i18n.language === "ar" ? "ar" : "en";

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeader
          badge={t("whyChooseUs.badge")}
          title={t("whyChooseUs.title")}
          highlightedText={t("whyChooseUs.highlight")}
          description={t("whyChooseUs.description")}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = icons[feature.icon];

            return (
              <div
                key={feature.id}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex rounded-xl bg-blue-100 p-4 transition group-hover:bg-blue-600">
                  <Icon className="h-8 w-8 text-blue-600 transition group-hover:text-white" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {feature.title[lang]} 
                </h3>

                <p className="leading-7 text-slate-600">
                {feature.description[lang]}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}