import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import BrandsSection from "../components/home/BrandSection";
import CTASection from "../components/common/CTASection";
export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <BrandsSection />
      <CTASection
  title="Looking for Quality Medical Equipment?"
  description="Our team is ready to help you choose the right products for your hospital, clinic or healthcare facility."
  primaryButtonText="Contact Us"
  primaryButtonLink="/contact"
  secondaryButtonText="WhatsApp"
  secondaryButtonLink="https://wa.me/966500000000"
/>
    </>
  );
}