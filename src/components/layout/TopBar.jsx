import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "../ui/Container";
import { company } from "../../config/company";

export default function TopBar() {
  return (
    <div className="hidden bg-slate-900 py-2 text-sm text-slate-300 lg:block">
      <Container>
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-6">

            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>{company.phone}</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>{company.email}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>{company.address}</span>
            </div>

          </div>

          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>{company.workingHours.weekdays}</span>
          </div>

        </div>
      </Container>
    </div>
  );
}