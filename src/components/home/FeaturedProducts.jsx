import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Digital Blood Pressure Monitor",
    category: "Medical Equipment",
    image: "https://placehold.co/400x300?text=BP+Monitor",
  },
  {
    id: 2,
    name: "Hospital Bed",
    category: "Hospital Furniture",
    image: "https://placehold.co/400x300?text=Hospital+Bed",
  },
  {
    id: 3,
    name: "Wheelchair",
    category: "Mobility Aids",
    image: "https://placehold.co/400x300?text=Wheelchair",
  },
  {
    id: 4,
    name: "Surgical Gloves",
    category: "Medical Disposable",
    image: "https://placehold.co/400x300?text=Gloves",
  },
];

export default function FeaturedProducts() {

  const whatsappLink = (product) => {
    const phone = "966500000000"; // Replace later

    const message = `Hello, I'm interested in the product:

Product: ${product.name}
Category: ${product.category}`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            Featured Products
          </h2>

          <p className="text-gray-500 mt-3">
            Explore some of our most popular medical products.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">

                <span className="text-sm text-blue-600">
                  {product.category}
                </span>

                <h3 className="font-bold mt-2 text-lg">
                  {product.name}
                </h3>

                <a
                  href={whatsappLink(product)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
                >
                  <FaWhatsapp />
                  WhatsApp Inquiry
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}