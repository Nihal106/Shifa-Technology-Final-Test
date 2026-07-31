import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import { company } from "../../config/company";

export default function ContactInfo() {
  const { t } = useTranslation("contact");

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-slate-900">
        {t("info.title")}
      </h2>

      <p className="mt-3 text-slate-600">
        {t("info.description")}
      </p>

      <div className="mt-10 flex-1">

        {/* Phone */}
        <div className="flex items-start gap-4 border-b border-slate-200 pb-6">
          <div className="flex-shrink-0 rounded-xl bg-blue-100 p-3 text-blue-600">
            <Phone size={24} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              {t("info.phone")}
            </h3>

            <a
              href={`tel:${company.phone}`}
              className="mt-1 block text-slate-600 transition hover:text-blue-600"
            >
              {company.phone}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4 border-b border-slate-200 py-6">
          <div className="flex-shrink-0 rounded-xl bg-blue-100 p-3 text-blue-600">
            <Mail size={24} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              {t("info.email")}
            </h3>

            <a
              href={`mailto:${company.email}`}
              className="mt-1 block break-all text-slate-600 transition hover:text-blue-600"
            >
              {company.email}
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4 border-b border-slate-200 py-6">
          <div className="flex-shrink-0 rounded-xl bg-blue-100 p-3 text-blue-600">
            <MapPin size={24} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              {t("info.address")}
            </h3>

            <p className="mt-1 text-slate-600">
              {company.address}
            </p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-start gap-4 pt-6">
          <div className="flex-shrink-0 rounded-xl bg-blue-100 p-3 text-blue-600">
            <Clock size={24} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              {t("info.workingHours")}
            </h3>

            <div className="mt-3 space-y-4">

              <div>
                <p className="font-medium text-slate-900">
                  {t("info.weekdays")}
                </p>

                <p className="text-slate-600">
                  {company.workingHours.weekdays}
                </p>
              </div>

              <div>
                <p className="font-medium text-slate-900">
                  {t("info.saturday")}
                </p>

                <p className="text-slate-600">
                  {company.workingHours.saturday}
                </p>
              </div>

              <div>
                <p className="font-medium text-slate-900">
                  {t("info.friday")}
                </p>

                <p className="text-slate-600">
                  {t("info.closed")}
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>

      <a
        href={`https://wa.me/${company.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-semibold text-white shadow-md transition hover:bg-[#1EBE5D] hover:shadow-lg"
      >
        <FaWhatsapp className="text-xl" />
        {t("info.whatsapp")}
      </a>
    </div>
  );
}