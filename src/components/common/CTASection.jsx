import { Link } from "react-router-dom";
import Container from "../ui/Container";
import { FaWhatsapp } from "react-icons/fa";

export default function CTASection({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  badge,
}) {
  return (
    <section className="bg-blue-600 py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center text-white">
          {badge && (
            <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
              {badge}
            </span>
          )}

          <h2 className="mt-6 text-4xl font-bold">
            {title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            {description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to={primaryButtonLink}
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              {primaryButtonText}
            </Link>

            <a
              href={secondaryButtonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#1EBE5D] hover:shadow-xl"
            >
              <FaWhatsapp className="text-xl" />
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}