import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function NotFoundContent() {
  const { t } = useTranslation("notFound");

  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            {t("badge")}
          </span>

          <h1 className="mt-8 text-6xl font-bold text-slate-900">
            404
          </h1>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            {t("title")}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link to="/">
              <Button>
                {t("home")}
              </Button>
            </Link>

            <Link to="/contact">
              <Button variant="outline">
                {t("contact")}
              </Button>
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
}