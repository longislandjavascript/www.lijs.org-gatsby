import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export const DDDLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "ddd/developer-deep-dives-logo.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={data.icon.childImageSharp.fixed} />;
};
