import { company } from "../../config/company";
import contact from "../../data/contact.json";
import SectionHeader from "../common/SectionHeader";

export default function ContactMap() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge={contact.map.badge}
          title={contact.map.title}
          description={contact.map.description}
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <iframe
            src={company.mapEmbedUrl}
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className="block"
          />
        </div>
      </div>
    </section>
  );
}