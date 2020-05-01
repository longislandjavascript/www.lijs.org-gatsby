import React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  description?: string;
  title: string;
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
  const keywords = site.siteMetadata.keywords.join(", ");
  const iconUrl = `${siteUrl}/lijs-logo.png`;

  // <link rel="icon" href="favicon.ico" />
  //     <link
  //       rel="icon"
  //       type="image/png"
  //       href="lijs-logo-192.png"
  //       sizes="192x192"
  //     />
  //     <link
  //       rel="apple-touch-icon-precomposed"
  //       sizes="152x152"
  //       href="apple-touch-icon.png"
  //     />

  //     <title>{metaTitle}</title>
  //     <meta name="keywords" content={keywords} />
  //     <meta name="title" content="Long Island JavaScript Meetup" />
  //     <meta name="description" content={metaDescription} />

  //     <meta property="og:type" content="website" />
  //     <meta property="og:url" content={siteUrl} />
  //     <meta property="og:title" content={metaTitle} />
  //     <meta property="og:description" content={metaDescription} />
  //     <meta property="og:image" content={iconUrl} />

  //     <meta property="twitter:card" content="summary_large_image" />
  //     <meta property="twitter:url" content={siteUrl} />
  //     <meta property="twitter:title" content={metaTitle} />
  //     <meta property="twitter:description" content={metaDescription} />
  //     <meta property="twitter:image" content={iconUrl} />
  //   </GatsbySeo>

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
