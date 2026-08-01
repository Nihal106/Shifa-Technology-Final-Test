import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";

import Button from "./Button";

export default function ProductCard({
  product,
  highlight,
}) {
  const { i18n, t } = useTranslation("common");

  const lang =
    i18n.language === "ar" ? "ar" : "en";

  const cardRef = useRef(null);

  const [isHighlighted, setIsHighlighted] =
    useState(false);

  useEffect(() => {
    if (!highlight) return;

    cardRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    setIsHighlighted(true);

    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [highlight]);

  const phone = "966500000000";

  const message = `Hello,

I'm interested in:

Product: ${product.name[lang]}`;

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      ref={cardRef}
      className={`group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        isHighlighted
          ? "border-2 border-blue-600 ring-4 ring-blue-200"
          : "border border-slate-200"
      }`}
    >
      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={product.images?.[0]}
          alt={product.name[lang]}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">
          {product.name[lang]}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm text-slate-600">
          {product.description[lang]}
        </p>

        <div className="mt-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="success"
              className="w-full"
            >
              <FaWhatsapp />

              <span className="ml-2">
                {t("product.whatsappInquiry")}
              </span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}