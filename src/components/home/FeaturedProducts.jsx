import { FaWhatsapp } from "react-icons/fa";

import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";

import { company } from "../../config/company";
import { getFeaturedProducts } from "../../services/productService";
import { useTranslation } from "react-i18next";

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();
  const { t } = useTranslation("home");

  const whatsappLink = (product) => {
    const message = `Hello,

I'm interested in the following product.

Product: ${product.name}
Category: ${product.category.name}
Brand: ${product.brand.name}

Please provide more information.`;

    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
<SectionHeader
  badge={t("featuredProducts.badge")}
  title={t("featuredProducts.title")}
  highlightedText={t("featuredProducts.highlight")}
  description={t("featuredProducts.description")}
/>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-52 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-56 lg:h-60"
              />

              <div className="flex flex-1 flex-col p-6">
                <span className="text-sm font-medium text-blue-600">
                  {product.category.name}
                </span>

                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {product.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {product.shortDescription}
                </p>

                <a
                  href={whatsappLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  <FaWhatsapp />
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}