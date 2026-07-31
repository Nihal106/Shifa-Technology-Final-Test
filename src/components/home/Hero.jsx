import { FaWhatsapp } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { company } from "../../config/company";

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation("home");

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
    <section className="relative flex min-h-[600px] items-center md:h-[650px]">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1800&auto=format&fit=crop"
        alt="Medical Equipment"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="max-w-3xl text-white">

          <span className="inline-block rounded-full bg-blue-600 px-4 py-2 text-xs font-medium sm:text-sm">
            {t("hero.badge")}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {t("hero.title")}
            <span className="text-blue-400">
              {" "}
              {t("hero.highlight")}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg lg:text-xl lg:leading-8">
            {t("hero.description")}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button
              onClick={handleBrowseCategories}
              className="rounded-lg bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
            >
              {t("hero.browse")}
            </button>

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-4 font-semibold transition hover:bg-green-700"
            >
              <FaWhatsapp size={22} />
              {t("hero.whatsapp")}
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}