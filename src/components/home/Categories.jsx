import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaHeartbeat,
  FaHospital,
  FaWheelchair,
  FaStethoscope,
  FaSyringe,
  FaBriefcaseMedical,
} from "react-icons/fa";

import categories from "../../data/categories.json";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";

// Map category slugs to icons
const categoryIcons = {
  "medical-equipment": <FaHeartbeat size={42} />,
  "hospital-furniture": <FaHospital size={42} />,
  "medical-disposable": <FaSyringe size={42} />,
  "healthcare-accessories": <FaStethoscope size={42} />,
  "emergency-first-aid": <FaBriefcaseMedical size={42} />,
  "mobility-aids": <FaWheelchair size={42} />,
};

export default function Categories() {
  const { t, i18n } = useTranslation("home");

  const lang = i18n.language === "ar" ? "ar" : "en";

  return (
    <section
      id="categories"
      className="bg-slate-50 py-16 sm:py-20"
    >
      <Container>

        <SectionHeader
          badge={t("categories.badge")}
          title={t("categories.title")}
          highlightedText={t("categories.highlight")}
          description={t("categories.description")}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group"
            >
              <div className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">

                <div className="mb-5 text-blue-600 transition duration-300 group-hover:scale-110">
                  {categoryIcons[category.slug] || (
                    <FaHeartbeat size={42} />
                  )}
                </div>

                <h3 className="text-base font-semibold text-slate-800">
                  {category.name[lang]}
                </h3>

              </div>
            </Link>
          ))}
        </div>

      </Container>
    </section>
  );
}