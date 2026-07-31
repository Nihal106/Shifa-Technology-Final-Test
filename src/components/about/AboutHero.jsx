import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function AboutHero() {
  return (
    <section className="bg-slate-50">
      <Container className="py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              About Us
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Trusted Medical Equipment Supplier
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Delivering high-quality medical equipment
              and healthcare solutions to hospitals,
              clinics, laboratories, and healthcare
              professionals across Saudi Arabia.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link to="/contact">
                <Button>
                  Contact Us
                </Button>
              </Link>

              <Link to="/">
                <Button variant="outline">
                  Browse Products

                  <ArrowRight
                    size={18}
                    className="ml-2"
                  />
                </Button>
              </Link>

            </div>

          </div>

          {/* Right Image */}

          <div>
            <img
              src="/images/about/about-hero.jpg"
              alt="Medical Equipment"
              className="w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}