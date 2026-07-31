import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({
  direction = "down",
}) {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

const dropdownPosition =
  direction === "up"
    ? `absolute bottom-full ${
        isRTL ? "left-0" : "right-0"
      } mb-2`
    : `absolute top-full ${
        isRTL ? "left-0" : "right-0"
      } mt-2`;
  return (
    <div
      className="relative"
      ref={dropdownRef}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:border-blue-600 hover:text-blue-600"
      >
        <Globe size={18} />

        {i18n.language === "en"
          ? "English"
          : "العربية"}

        <span
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div
          className={`${dropdownPosition} z-[9999] w-44 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl`}
        >
          <button
            type="button"
            onClick={() => changeLanguage("en")}
            className={`flex w-full items-center justify-between px-4 py-3 transition hover:bg-slate-100 ${
              i18n.language === "en"
                ? "bg-blue-50 font-semibold text-blue-600"
                : ""
            }`}
          >
            <span>English</span>
            {i18n.language === "en" && <span>✓</span>}
          </button>

          <button
            type="button"
            onClick={() => changeLanguage("ar")}
            className={`flex w-full items-center justify-between px-4 py-3 transition hover:bg-slate-100 ${
              i18n.language === "ar"
                ? "bg-blue-50 font-semibold text-blue-600"
                : ""
            }`}
          >
            <span>العربية</span>
            {i18n.language === "ar" && <span>✓</span>}
          </button>
        </div>
      )}
    </div>
  );
}