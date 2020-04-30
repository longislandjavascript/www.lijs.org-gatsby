import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type Props = {
  title?: string;
  description?: string;
  lang?: string;
  meta?: any[];
  pathname: string;
};

export const SEO = ({ description, pathname, meta = [], title }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaKeywords = site.siteMetadata.keywords.join(",");

  return (
    // @ts-ignore
    <Helmet
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      htmlAttributes={{ lang: "en" }}
      link={[
        {
          rel: "canonical",
          href: `${site.siteMetadata.siteUrl}${pathname}`,
        },
        {
          rel: "icon",
          sizes: "192x192",
          href: "/lijs-logo-192.png",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: metaKeywords,
        },
        {
          name: `og:title`,
          content: title,
        },
        {
          name: `og:description`,
          content: metaDescription,
        },
        {
          name: `og:type`,
          content: `website`,
        },
        {
          name: `og:image`,
          content: `https://res.cloudinary.com/gojutin/image/upload/v1588207007/lijs.org/lijs-logo.png`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: `https://res.cloudinary.com/gojutin/image/upload/v1588207007/lijs.org/lijs-logo.png`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};
