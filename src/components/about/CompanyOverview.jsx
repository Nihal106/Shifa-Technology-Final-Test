import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";

export default function CompanyOverview() {
  const { t, i18n } = useTranslation("about");

  const features = t("overview.features", {
    returnObjects: true,
  });

  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}

          <div>
<img
  src="/images/about/company-overview.jpg"
  alt="Company Overview"
  className="h-60 w-full rounded-3xl object-cover shadow-xl sm:h-72 lg:h-auto"
/>
          </div>

          {/* Content */}

          <div>

            <SectionHeader
              badge={t("overview.badge")}
              title={t("overview.title")}
              highlightedText={t("overview.highlight")}
              description={t("overview.description")}
              center={false}
            />

            <div className="mt-8 space-y-4">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    className="text-blue-600"
                    size={20}
                  />

                  <span className="text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}