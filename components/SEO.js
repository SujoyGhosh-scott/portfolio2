import Head from "next/head";

const SEO = ({
  title = "Sujoy Ghosh | Full-Stack Web Developer",
  description = "Portfolio of Sujoy Ghosh - Full-Stack Web Developer with expertise in React, Next.js, Node.js, and modern web technologies. Experienced in building scalable web applications and mobile apps.",
  image = "/introImage.jpg",
  url = "https://sujoyghosh.netlify.app",
  type = "website",
  keywords = "Sujoy Ghosh, Full Stack Developer, Web Developer, React Developer, Next.js, Node.js, JavaScript, Portfolio, Kolkata Developer",
  canonical,
}) => {
  const siteTitle = "Sujoy Ghosh - Portfolio";
  const fullTitle = title.includes(siteTitle)
    ? title
    : `${title} | ${siteTitle}`;
  const imageUrl = image.startsWith("http") ? image : `${url}${image}`;
  const canonicalUrl = canonical || url;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      <meta property="twitter:image:alt" content={title} />

      {/* Additional SEO */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content="Kolkata" />
      <meta name="geo.position" content="22.5726;88.3639" />
      <meta name="ICBM" content="22.5726, 88.3639" />
    </Head>
  );
};

export default SEO;
