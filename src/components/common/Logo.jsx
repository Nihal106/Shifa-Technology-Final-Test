import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Logo() {
  const { i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <Link
      to="/"
      className="flex items-center gap-1 transition-opacity duration-200 hover:opacity-90"
    >
      {/* Logo */}
      <img
        src="/images/logo.png"
        alt="Shifa Technologies Logo"
        className="h-20 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
      />

      {/* Company Name */}
      <div
        className={`flex flex-col leading-tight ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <h1 className="text-[1.2rem] font-extrabold tracking-tight sm:text-[2rem]">
          {isArabic ? (
            <span className="text-green-700">شركة شفاء للتقنيات</span>
          ) : (
            <>
              <span className="text-blue-600">Shifa </span>
              <span className="text-green-700">Technologies Co.</span>
            </>
          )}
        </h1>

        <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
          {isArabic
            ? "المعدات الطبية وحلول الرعاية الصحية"
            : "Medical Equipment & Healthcare Solutions"}
        </p>
      </div>
    </Link>
  );
}