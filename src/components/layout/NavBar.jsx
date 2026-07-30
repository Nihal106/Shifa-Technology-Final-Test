import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import Logo from "../common/Logo";
import SearchBar from "../common/SearchBar";
import LanguageSwitcher from "../common/LanguageSwitcher";

const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-blue-600 font-semibold"
    : "text-slate-700 hover:text-blue-600 transition-colors";

const handleHomeClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <div className="hidden items-center gap-8 font-medium lg:flex">
          <ScrollLink
  to="home"
  smooth
  duration={500}
  offset={0}
  className="cursor-pointer text-slate-700 hover:text-blue-600 transition-colors"
>
  Home
</ScrollLink>

          <ScrollLink
            to="categories"
            smooth
            duration={500}
            offset={-80}
            className="cursor-pointer text-slate-700 transition-colors hover:text-blue-600"
          >
            Categories
          </ScrollLink>

          <ScrollLink
            to="brands"
            smooth
            duration={500}
            offset={-80}
            className="cursor-pointer text-slate-700 transition-colors hover:text-blue-600"
          >
            Brands
          </ScrollLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <SearchBar />
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}