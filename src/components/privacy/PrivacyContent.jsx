import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function PrivacyContent() {
  const { t } = useTranslation("privacy");

  const sections = [
    "introduction",
    "informationCollection",
    "informationUsage",
    "cookies",
    "thirdParty",
    "security",
    "rights",
    "changes",
  ];

  return (
    <section className="bg-white py-16">
      <Container>

        <div className="space-y-8">

          {sections.map((section) => (
            <div
              key={section}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-slate-900">
                {t(`sections.${section}.title`)}
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                {t(`sections.${section}.content`)}
              </p>
            </div>
          ))}

          {/* Contact Card */}

          <div className="rounded-2xl bg-blue-50 p-10 text-center">

            <h2 className="text-3xl font-bold text-slate-900">
              {t("contactCard.title")}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">
              {t("contactCard.description")}
            </p>

            <Link to="/contact">
              <Button className="mt-8">
                {t("contactCard.button")}
              </Button>
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
}