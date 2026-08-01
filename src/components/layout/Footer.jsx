import { NavLink } from "react-router-dom";
import { company } from "../../config/company";
import { useTranslation } from "react-i18next";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Logo from "../common/Logo";
import Container from "../ui/Container";

import categories from "../../data/categories.json";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { t, i18n } = useTranslation("common");

  const lang = i18n.language === "ar" ? "ar" : "en";

  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <Logo />

            <p className="mt-6 leading-7 text-slate-400">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              {t("footer.quickLinks")}
            </h3>

            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/"
                  className="transition hover:text-white"
                >
                  {t("nav.home")}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="transition hover:text-white"
                >
                  {t("nav.about")}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="transition hover:text-white"
                >
                  {t("nav.contact")}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              {t("footer.categories")}
            </h3>

            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <NavLink
                    to={`/category/${category.slug}`}
                    className="transition hover:text-white"
                  >
                    {category.name[lang]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              {t("footer.contact")}
            </h3>

            <div className="space-y-4">

              <a
                href={`tel:${company.phone}`}
                className={`flex items-center gap-3 transition hover:text-white ${
                  lang === "ar"
                    ? "flex-row-reverse justify-end text-right"
                    : ""
                }`}
              >
                <Phone size={18} />
                <span dir="ltr">{company.phone}</span>
              </a>

              <a
                href={`mailto:${company.email}`}
                className={`flex items-center gap-3 transition hover:text-white ${
                  lang === "ar"
                    ? "flex-row-reverse justify-end text-right"
                    : ""
                }`}
              >
                <Mail size={18} />
                <span dir="ltr">{company.email}</span>
              </a>

              <div
                className={`flex items-center gap-3 ${
                  lang === "ar"
                    ? "flex-row-reverse justify-end text-right"
                    : ""
                }`}
              >
                <MapPin size={18} />
                <span>{company.address}</span>
              </div>

            </div>

            {(company.social.facebook ||
              company.social.instagram ||
              company.social.linkedin) && (
              <div
                className={`mt-8 flex gap-4 ${
                  lang === "ar" ? "justify-end" : ""
                }`}
              >

                {company.social.facebook && (
                  <a
                    href={company.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
                  >
                    <FaFacebookF />
                  </a>
                )}

                {company.social.instagram && (
                  <a
                    href={company.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-slate-800 p-3 transition hover:bg-pink-600"
                  >
                    <FaInstagram />
                  </a>
                )}

                {company.social.linkedin && (
                  <a
                    href={company.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-700"
                  >
                    <FaLinkedinIn />
                  </a>
                )}

              </div>
            )}

          </div>

        </div>
      </Container>

      <div className="border-t border-slate-800">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-center text-sm text-slate-400 md:flex-row">

<p className="flex items-center gap-1">
  <span>©</span>
  <span dir="ltr">
    {currentYear} {company.name}
  </span>
  <span>{t("footer.copyright")}</span>
</p>
          <div className="flex flex-wrap justify-center gap-6">
            <NavLink
              to="/privacy"
              className="transition hover:text-white"
            >
              {t("footer.privacy")}
            </NavLink>

            <NavLink
              to="/terms"
              className="transition hover:text-white"
            >
              {t("footer.terms")}
            </NavLink>
          </div>

        </Container>
      </div>
    </footer>
  );
}