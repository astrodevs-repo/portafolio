import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = React.memo(function SEO({
  title,
  description,
  name,
  type,
  image,
  url,
  siteName,
  keywords,
}) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords?.join(", ")} />
      <meta name="author" content={name} />
      <link rel="canonical" href={url} />
      {/* End standard metadata tags */}

      {/* Open Graph / Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      {/* End Open Graph / Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* End Twitter tags */}
    </Helmet>
  );
});

export default SEO;
