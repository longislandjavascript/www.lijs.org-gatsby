import React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  description?: string;
  title?: string;
}

export const SEO: React.FC<SEOProps> = ({ description, title }) => {
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

  const { siteUrl } = site.siteMetadata;
  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  // const keywords = site.siteMetadata.keywords.join(", ");
  const iconUrl = `${siteUrl}/lijs-logo.png`;

  return (
    <GatsbySeo
      language="en"
      title={metaTitle}
      description={metaDescription}
      titleTemplate={`%s | LIJS`}
      openGraph={{
        url: siteUrl,
        title: metaTitle,
        description: metaDescription,
        images: [
          {
            url: iconUrl,
            width: 700,
            height: 700,
            alt: "Long Island JavaScript Meetup Logo",
          },
        ],
        site_name: "LIJS",
      }}
      twitter={{
        handle: "@gojutin",
        cardType: "summary_large_image",
      }}
    />
  );
};
