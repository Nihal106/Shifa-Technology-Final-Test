import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";

export default function MissionVision() {
  const { t } = useTranslation("about");

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>

        <SectionHeader
          badge={t("missionVision.badge")}
          title={t("missionVision.title")}
          highlightedText={t("missionVision.highlight")}
          description={t("missionVision.description")}
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900">
              {t("mission.title")}
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {t("mission.description")}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900">
              {t("vision.title")}
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {t("vision.description")}
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
}