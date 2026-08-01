import { FaWhatsapp } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { company } from "../../config/company";

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation("home");

  const isRTL = i18n.language === "ar";

  const handleBrowseCategories = () => {
    if (location.pathname === "/") {
      document.getElementById("categories")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/", {
        state: {
          scrollToCategories: true,
        },
      });
    }
  };

  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <div
        className="relative min-h-[560px] lg:min-h-[620px] bg-cover bg-center lg:bg-right"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >

        {/* Readability Gradient */}

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20 rtl:bg-gradient-to-l"></div>

        {/* Soft Overlay */}

        <div className="absolute inset-0 bg-blue-50/15"></div>

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-6 lg:min-h-[700px] lg:px-8">

          <div
            className={`max-w-xl ${
              isRTL
                ? "text-right lg:ml-auto lg:pr-8"
                : "text-left"
            }`}
          >

            {/* Badge */}

            <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              {t("hero.badge")}
            </span>

            {/* Heading */}

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-slate-900 sm:text-5xl lg:text-5xl">

              {t("hero.title")}

              <span className="block text-blue-600">
                {t("hero.highlight")}
              </span>

            </h1>

            {/* Description */}

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-700 sm:text-lg">

              {t("hero.description")}

            </p>

            {/* Buttons */}

            <div
              className={`mt-10 flex flex-col gap-4 sm:flex-row ${
                isRTL ? "sm:flex-row-reverse" : ""
              }`}
            >

              <button
                onClick={handleBrowseCategories}
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              >
                {t("hero.browse")}
              </button>

              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl border-2 border-green-600 bg-white px-8 py-4 font-semibold text-green-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:text-white hover:shadow-xl"
              >
                <FaWhatsapp size={22} />
                {t("hero.whatsapp")}
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}