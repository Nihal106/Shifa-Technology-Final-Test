import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  image = "/images/og-image.jpg",
  url = "",
}) {
  const siteName = "Shifa Technologies";
  const siteUrl = "https://www.shifatechnologies.com";

  const fullTitle = title
    ? `${title} | ${siteName}`
    : siteName;

  const fullUrl = `${siteUrl}${url}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta
  name="theme-color"
  content="#2563eb"
/>
<meta
  property="og:locale"
  content="en_US"
/>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        name="author"
        content="Shifa Technologies"
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <link
        rel="canonical"
        href={fullUrl}
      />

      {/* Open Graph */}

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content={siteName}
      />

      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={`${siteUrl}${image}`}
      />

      <meta
        property="og:url"
        content={fullUrl}
      />

      {/* Twitter */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={`${siteUrl}${image}`}
      />
    </Helmet>
  );
}