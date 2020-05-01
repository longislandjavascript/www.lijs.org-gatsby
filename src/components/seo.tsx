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

export const SEO = ({ description, pathname, title }: Props) => {
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
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `https://res.cloudinary.com/gojutin/image/upload/v1588207007/lijs.org/lijs-logo.png`,
        },
        {
          property: `twitter:card`,
          content: `summary`,
        },
        {
          property: `twitter:image`,
          content: `https://res.cloudinary.com/gojutin/image/upload/v1588207007/lijs.org/lijs-logo.png`,
        },
        {
          property: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          property: `twitter:title`,
          content: title,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  );
};
