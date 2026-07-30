import { Link } from "react-router-dom";
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
import SectionTitle from "../ui/SectionTitle";

// Map category names to icons
const categoryIcons = {
  "Medical Equipment": <FaHeartbeat size={42} />,
  "Hospital Furniture": <FaHospital size={42} />,
  "Medical Disposable": <FaSyringe size={42} />,
  "Healthcare Accessories": <FaStethoscope size={42} />,
  "Emergency First Aid": <FaBriefcaseMedical size={42} />,
  "Mobility Aids": <FaWheelchair size={42} />,
};

export default function Categories() {
  return (
    
    <section id="categories" className="py-20 bg-slate-50">
      <Container>
        <SectionTitle
          title="Browse Our Categories"
          subtitle="Explore our wide range of premium medical products for hospitals, clinics and healthcare professionals."
        />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group"
            >
              <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-5 flex justify-center text-blue-600 transition group-hover:scale-110">
                  {categoryIcons[category.name] || (
                    <FaHeartbeat size={42} />
                  )}
                </div>

                <h3 className="font-semibold text-slate-800">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
    
  );
}