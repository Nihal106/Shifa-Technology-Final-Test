import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";

import about from "../../data/about.json";

export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>

        <SectionHeader
          badge="Mission & Vision"
          title="Driven by"
          highlightedText="Purpose"
          description="Everything we do is guided by our mission and vision."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              {about.mission.title}
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {about.mission.description}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              {about.vision.title}
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {about.vision.description}
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
}