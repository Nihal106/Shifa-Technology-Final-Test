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
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionHeader
          badge="Why Choose Us"
          title="Why Choose"
          highlightedText="Medispot?"
          description="Trusted by hospitals, clinics and healthcare professionals across Saudi Arabia."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = icons[feature.icon];

            return (
              <div
                key={feature.id}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 inline-flex rounded-xl bg-blue-100 p-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}