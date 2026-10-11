
import { useState } from "react";
import MobileLanguageSwitcher from "../common/MobileLanguageSwitcher";
import {
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import {
  Menu,
  X,
  Home,
  LayoutGrid,
  Info,
  Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import Logo from "../common/Logo";
import { company } from "../../config/company";

const navLinkClass = ({ isActive }) =>
  `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
    isActive
      ? "bg-blue-50 font-semibold text-blue-600"
      : "text-slate-700 hover:bg-slate-100"
  }`;

export default function MobileMenu() {
  const { t, i18n } = useTranslation("common");

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoriesClick = () => {
    setOpen(false);

    if (location.pathname === "/") {
      document
        .getElementById("categories")
        ?.scrollIntoView({
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
    <>
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t("nav.openMenu", {
          defaultValue: "Open navigation menu",
        })}
        aria-expanded={open}
        className="rounded-lg p-2 transition hover:bg-slate-100"
      >
        <Menu size={26} />
      </button>

      {/* Overlay */}
      {open && (
        <button
          type="button"
          aria-label={t("nav.closeMenu", {
            defaultValue: "Close navigation menu",
          })}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* Drawer */}
      <aside
        aria-label={t("nav.mobileNavigation", {
          defaultValue: "Mobile navigation",
        })}
        className={`fixed top-0 z-50 flex h-dvh w-[min(320px,88vw)] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          i18n.language.startsWith("ar")
            ? `left-0 ${
                open ? "translate-x-0" : "-translate-x-full"
              }`
            : `right-0 ${
                open ? "translate-x-0" : "translate-x-full"
              }`
        }`}
        aria-hidden={!open}
      >
        {/* Drawer header */}
        <div className="flex shrink-0 items-start justify-between border-b p-5">
          <Logo />

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t("nav.closeMenu", {
              defaultValue: "Close navigation menu",
            })}
            className="rounded-lg p-2 transition hover:bg-slate-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="space-y-2 overflow-y-auto px-5 py-4">
          <NavLink
            to="/"
            end
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            <Home size={20} />
            {t("nav.home")}
          </NavLink>

          <button
            type="button"
            onClick={handleCategoriesClick}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-slate-700 transition hover:bg-slate-100"
          >
            <LayoutGrid size={20} />
            {t("nav.categories")}
          </button>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            <Info size={20} />
            {t("nav.about")}
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            <Phone size={20} />
            {t("nav.contact")}
          </NavLink>
        </nav>

        {/* Footer */}
        <div className="mt-auto shrink-0 border-t p-5">
          <div className="space-y-2 text-sm text-slate-600">
            <p>📞 {company.phone}</p>
            <p>✉ {company.email}</p>
          </div>

          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white transition hover:bg-[#1EBE5D]"
          >
            <FaWhatsapp />
            WhatsApp Us
          </a>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Us
          </NavLink>

          <div className="mt-5 border-t pt-5">
            <MobileLanguageSwitcher />
          </div>
        </div>
      </aside>
    </>
  );
}