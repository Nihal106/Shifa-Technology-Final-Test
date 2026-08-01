import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function AboutHero() {
  const { t, i18n } = useTranslation("about");

  return (
    <section className="bg-slate-50">
      <Container className="py-16 lg:py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {t("hero.badge")}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              {t("hero.title")}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {t("hero.description")}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link to="/contact">
                <Button>
                  {t("hero.contact")}
                </Button>
              </Link>

              <Link to="/">
                <Button variant="outline">
                  {t("hero.browse")}

                  <ArrowRight
                    size={18}
                    className={i18n.language === "ar" ? "mr-2" : "ml-2"}
                  />
                </Button>
              </Link>

            </div>

          </div>

          {/* Right Image */}

          <div>
<img
  src="/images/about/about-hero.jpg"
  alt="Medical Equipment"
  className="h-60 w-full rounded-3xl object-cover shadow-xl sm:h-72 lg:h-auto"
/>
          </div>

        </div>
      </Container>
    </section>
  );
}