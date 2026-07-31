import brands from "../../data/brands.json";
import SectionHeader from "../common/SectionHeader";
import Container from "../ui/Container";

export default function BrandsSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeader
          badge="Brands"
          title="Our Trusted"
          highlightedText="Brands"
          description="We partner with leading medical equipment manufacturers to provide reliable healthcare solutions."
        />

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand) => (
<div
  key={brand.id}
  className="group flex h-36 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
>
  <img
    src={brand.logo}
    alt={brand.name}
    className="mb-4 h-12 object-contain transition-transform duration-300 group-hover:scale-105"
  />

  <h3 className="text-lg font-semibold text-slate-700">
    {brand.name}
  </h3>
</div>
          ))}
        </div>
      </Container>
    </section>
  );
}