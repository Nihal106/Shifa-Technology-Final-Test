import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-[650px] flex items-center">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1800&auto=format&fit=crop"
        alt="Medical Equipment"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-3xl text-white">

          <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">
            Trusted Medical Equipment Supplier
          </span>

          <h1 className="text-6xl font-bold mt-6 leading-tight">
            Premium Medical Equipment &
            <span className="text-blue-400">
              {" "}Healthcare Solutions
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-200 leading-8">
            Supplying hospitals, clinics, laboratories and healthcare
            professionals with high-quality medical equipment across Saudi Arabia.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition">
              Browse Categories
            </button>

            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition">
              <FaWhatsapp size={22} />
              WhatsApp
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}