import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";

export default function ContactHero() {
  const { t } = useTranslation("contact");

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeader
          as="h1"
          badge={t("hero.badge")}
          title={t("hero.title")}
          description={t("hero.description")}
        />
      </Container>
    </section>
  );
}