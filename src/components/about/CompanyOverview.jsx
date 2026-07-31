import { CheckCircle } from "lucide-react";

import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";

import about from "../../data/about.json";

export default function CompanyOverview() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}

          <div>
            <img
              src="/images/about/company-overview.jpg"
              alt="Company Overview"
              className="w-full rounded-3xl shadow-xl"
            />
          </div>

          {/* Content */}

          <div>

            <SectionHeader
              badge={about.overview.badge}
              title={about.overview.title}
              highlightedText={about.overview.highlightedText}
              description={about.overview.description}
              center={false}
            />

            <div className="mt-8 space-y-4">

              {about.overview.features.map((feature) => (
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