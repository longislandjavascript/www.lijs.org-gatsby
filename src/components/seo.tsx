import React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
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
    <GatsbySeo
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      canonical={`${site.siteMetadata.siteUrl}${pathname}`}
      description={metaDescription}
      openGraph={{
        url: site.siteMetadata.siteUrl,
        title,
        description: metaDescription,
        type: "website",
        images: [
          {
            url:
              "https://res.cloudinary.com/gojutin/image/upload/v1588191526/lijs.org/lijs-logo.png",
            width: 700,
            height: 700,
            alt: "Long Island JavaScript Meetup",
          },
        ],
      }}
      twitter={{
        // handle: "@handle",
        // site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
};
