import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import BrandsSection from "../components/home/BrandSection";
import CTASection from "../components/common/CTASection";
import { useTranslation } from "react-i18next";
import { company } from "../config/company";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
const { t } = useTranslation("common");
  useEffect(() => {
    if (location.state?.scrollToCategories) {
      document
        .getElementById("categories")
        ?.scrollIntoView({
          behavior: "smooth",
        });

      navigate(location.pathname, {
        replace: true,
        state: {},
      });
    }
  }, [location, navigate]);

  return (
    <>
<Hero />

<Categories />

<WhyChooseUs />

<BrandsSection />

<FeaturedProducts />
  <CTASection
    title={t("cta.title")}
    description={t("cta.description")}
    primaryButtonText={t("cta.contact")}
    primaryButtonLink="/contact"
    secondaryButtonText={t("cta.whatsapp")}
    secondaryButtonLink={`https://wa.me/${company.whatsapp}`}
  />
    </>
  );
}