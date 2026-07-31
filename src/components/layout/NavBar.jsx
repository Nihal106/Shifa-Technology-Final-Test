import {
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useTranslation } from "react-i18next";

import Logo from "../common/Logo";
import SearchBar from "../common/SearchBar";
import LanguageSwitcher from "../common/LanguageSwitcher";
import MobileMenu from "./MobileMenu";

const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-blue-600 font-semibold"
    : "text-slate-700 hover:text-blue-600 transition-colors";

export default function Navbar() {

const navigate = useNavigate();
const location = useLocation();
  const { t } = useTranslation("common");

  const handleCategoriesClick = () => {
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
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <div className="hidden items-center gap-8 font-medium lg:flex">
          <NavLink
  to="/"
  end
  onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
  className={navLinkClass}
>
            {t("nav.home")}
          </NavLink>

          <button
                onClick={handleCategoriesClick}
                className="text-slate-700 transition-colors hover:text-blue-600"
          >
            {t("nav.categories")}
          </button>

          <NavLink to="/about" className={navLinkClass}>
            {t("nav.about")}
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            {t("nav.contact")}
          </NavLink>
        </div>

<div className="flex items-center gap-4">
  {/* Desktop */}
  <div className="hidden items-center gap-4 lg:flex">
    <SearchBar />
    <LanguageSwitcher />
  </div>

  {/* Mobile */}
  <MobileMenu />
</div>
      </div>
    </nav>
  );
}