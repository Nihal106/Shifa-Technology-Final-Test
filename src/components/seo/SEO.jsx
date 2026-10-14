import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function SEO({
  title,
  description,
  keywords,
  image = "/images/og-image.jpg",
  url = "",
  type = "website",
  noindex = false,
  breadcrumbs = null,
  schema = null,
}) {
  const { i18n } = useTranslation();
  const lang = i18n.language && i18n.language.startsWith("ar") ? "ar" : "en";

  const siteName =
    lang === "ar"
      ? "شركة شفاء للتقنيات"
      : "Shifa Technologies Medicals Co.";

  const siteUrl = "https://www.shifatechnologies.com";

  const defaultDescription =
    lang === "ar"
      ? "شركة شفاء للتقنيات - مورد رائد للمعدات والأجهزة الطبية وقطع الغيار وأثاث المستشفيات في المملكة العربية السعودية."
      : "Shifa Technologies Medicals Co. - Leading supplier of premium medical equipment, biomedical spare parts, and hospital furniture across Saudi Arabia.";

  const metaDescription = description || defaultDescription;

  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} | Medical Equipment & Healthcare Solutions`;

  const fullUrl = `${siteUrl}${url.startsWith("/") ? url : `/${url}`}`;
  const fullImageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  const currentLocale = lang === "ar" ? "ar_SA" : "en_US";
  const alternateLocale = lang === "ar" ? "en_US" : "ar_SA";

  // Build BreadcrumbList Schema if breadcrumbs prop is provided
  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((crumb, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: crumb.name,
            item: crumb.item?.startsWith("http")
              ? crumb.item
              : `${siteUrl}${crumb.item || ""}`,
          })),
        }
      : null;

  return (
    <Helmet>
      {/* HTML Language & Direction */}
      <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} />

      {/* Title */}
      <title>{fullTitle}</title>

      {/* Robots Directive */}
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, follow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      {/* Meta Description */}
      <meta name="description" content={metaDescription} />

      {/* Meta Keywords */}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Author & Publisher */}
      <meta name="author" content="Shifa Technologies Medicals Co." />

      {/* Theme Color */}
      <meta name="theme-color" content="#2563eb" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Multilingual Hreflang Tags */}
      <link rel="alternate" hreflang="en" href={fullUrl} />
      <link rel="alternate" hreflang="ar" href={fullUrl} />
      <link rel="alternate" hreflang="x-default" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:locale" content={currentLocale} />
      <meta property="og:locale:alternate" content={alternateLocale} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Injected Structured Data (Breadcrumbs) */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* Injected Structured Data (Custom Page Schema) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}