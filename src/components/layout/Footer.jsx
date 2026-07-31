import { NavLink } from "react-router-dom";
import { company } from "../../config/company";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Logo from "../common/Logo";
import Container from "../ui/Container";

import categories from "../../data/categories.json";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <Logo />

            <p className="mt-6 leading-7 text-slate-400">
              Supplying hospitals, clinics and healthcare
              providers with reliable medical equipment
              across Saudi Arabia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Categories
            </h3>

            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <NavLink
                    to={`/category/${category.slug}`}
                  >
                    {category.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <Phone size={18} />
                <span>{company.phone}</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>{company.email}</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>{company.address}</span>
              </div>

            </div>

            <div className="mt-8 flex gap-4">

              <a
                href={company.social.facebook}
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaFacebookF />
              </a>

              <a
                href={company.social.instagram}
                className="rounded-full bg-slate-800 p-3 transition hover:bg-pink-600"
              >
                <FaInstagram />
              </a>

              <a
                href={company.social.linkedin}
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-700"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>
      </Container>

      <div className="border-t border-slate-800">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-slate-400 md:flex-row">

          <p>
            © 2026 Shifa Technologies Co. All rights reserved.
          </p>

          <div className="flex gap-6">
            <NavLink to="/privacy">
              Privacy Policy
            </NavLink>

            <NavLink to="/terms">
              Terms & Conditions
            </NavLink>
          </div>

        </Container>
      </div>
    </footer>
  );
}