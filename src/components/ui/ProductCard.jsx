import { FaWhatsapp } from "react-icons/fa";
import Button from "./Button";

export default function ProductCard({ product }) {
  const phone = "966500000000";

  const message = `Hello, I'm interested in:

Product: ${product.name}`;

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        <p className="text-sm text-blue-600 font-medium">
          {product.category}
        </p>

        <h3 className="mt-2 text-lg font-semibold text-slate-900">
          {product.name}
        </h3>

        <p className="mt-3 text-sm text-slate-600 line-clamp-3">
          {product.description}
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
                WhatsApp Inquiry
              </span>
            </Button>
          </a>
        </div>

      </div>

    </div>
  );
}