import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import Breadcrumb from "../common/Breadcrumb";

export default function PrivacyHero() {
  const { t: commonT } = useTranslation("common");
const { t } = useTranslation("privacy");
  return (
    <section className="bg-slate-100 py-10 lg:py-12">
      <Container>

        <Breadcrumb
          items={[
            {
              label: commonT("nav.home"),
              path: "/",
            },
            {
              label: t("hero.title"),
            },
          ]}
        />

        <span className="mt-6 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {t("hero.badge")}
        </span>

        <h1 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
          {t("hero.title")}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {t("hero.description")}
        </p>

        <p className="mt-6 text-sm font-medium text-slate-500">
          {t("hero.lastUpdated")}
        </p>

      </Container>
    </section>
  );
}