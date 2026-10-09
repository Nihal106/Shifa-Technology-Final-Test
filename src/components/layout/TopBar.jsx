import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import { company } from "../../config/company";

export default function TopBar() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div className="hidden bg-slate-900 py-2 text-sm text-slate-300 lg:block">
      <Container>
        <div
          className={`flex items-center justify-between ${
            isArabic ? "flex-row-reverse" : ""
          }`}
        >
          {/* Left Side */}
          <div
            className={`flex items-center gap-6 ${
              isArabic ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`flex items-center gap-2 ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              <Phone size={14} />
              <span dir="ltr">{company.phone}</span>
            </div>

            <div
              className={`flex items-center gap-2 ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              <Mail size={14} />
              <span dir="ltr">{company.email}</span>
            </div>


          </div>

          {/* Right Side */}
          <div
            className={`flex items-center gap-2 ${
              isArabic ? "flex-row-reverse" : ""
            }`}
          >
              <MapPin size={14} />
              <span>{company.address}</span>
          </div>
        </div>
      </Container>
    </div>
  );
}