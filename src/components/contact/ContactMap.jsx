import { useTranslation } from "react-i18next";

import { company } from "../../config/company";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";

export default function ContactMap() {
  const { t } = useTranslation("contact");

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>

        <SectionHeader
          badge={t("map.badge")}
          title={t("map.title")}
          description={t("map.description")}
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <iframe
            src={company.mapEmbedUrl}
            title="Google Map"
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="block"
          />
        </div>

      </Container>
    </section>
  );
}