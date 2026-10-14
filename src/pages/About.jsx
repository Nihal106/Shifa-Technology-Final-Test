import AboutHero from "../components/about/AboutHero";
import CompanyOverview from "../components/about/CompanyOverview";
import CoreValues from "../components/about/CoreValues";
import IndustriesSection from "../components/about/IndustriesSection";
import MissionVision from "../components/about/MissionVision";
import CTASection from "../components/common/CTASection";
import { useTranslation } from "react-i18next";
import { company } from "../config/company";
import SEO from "../components/seo/SEO";


export default function About() {
  const { t } = useTranslation("common");
  const breadcrumbs = [
    { name: t("nav.home"), item: "/" },
    { name: t("nav.about"), item: "/about" },
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about Shifa Technologies, our mission, vision and commitment to delivering quality medical equipment across Saudi Arabia."
        keywords="about shifa technologies, medical supplier, healthcare equipment, Saudi Arabia, Jeddah"
        url="/about"
        breadcrumbs={breadcrumbs}
      />
      <AboutHero />
      <CompanyOverview />
      <MissionVision />
      <CoreValues />
      <IndustriesSection />
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